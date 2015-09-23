var express = require('express');
var consign = require('consign');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Conexão com o banco de dados usando Mongoose
require('./config/database')('mongodb://127.0.0.1:27017/polls');

//var routes_polls = require('./routes/polls');

var app = express();

app.use(logger('dev'));

// Gerenciador de templates http://embeddedjs.com
app.set('view engine', 'ejs');

// Pasta onde ficam os arquivos de templates
app.set('views', './views');            

// Pasta com recursos estáticos: html, js, css, etc    
app.use(express.static('./public'));        
app.use(bodyParser.urlencoded({extended: true}));

// Efetua o parse dos dados da requisição para req.body
app.use(bodyParser.json());

// Parser "header cookies da req" para req.cookies e armazena o ID da sessão
app.use(cookieParser());

// Middleware de roteamento
//app.use('/', routes_polls);

consign({
    cwd: process.cwd(),
    locale: 'pt-br',
    logger: console,
    verbose: true,
    extensions: [ '.js', '.json', '.node' ],
    loggingType: 'info'
  })
  .include('models')
  .then('controllers')
  .then('routes')
  .into(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
