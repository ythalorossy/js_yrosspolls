var express = require('express');
var consign = require('consign');

// Conexão com o banco de dados usando Mongoose
require('./config/database')('mongodb://127.0.0.1:27017/polls');

// Configurações do express
var app = require('./config/express')();

// Gerencia a sequencia de carregamento dos modulos
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
