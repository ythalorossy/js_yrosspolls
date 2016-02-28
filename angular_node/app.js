var consign = require('consign');

// Connection with database using Mongoose
//require('./config/database')('mongodb://ythalorossy-js_yrosspolls-1996271:27017/polls');
require('./config/database')('mongodb://augusto:ayabrea123@ds015508.mongolab.com:15508/polls');

// Express Configurations
var app = require('./config/express')();
var server = require('http').Server(app);

// Socket.io default configuration
require('./config/socket.io')(server);

// OAuth Configurations
require('./config/oauth')("https://js-yrosspolls-ythalorossy.c9.io");

// The sequence in which the modules will be loaded
consign({
    cwd: 'server',
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
        console.log(err);
        
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

server.listen(process.env.PORT || 3000);