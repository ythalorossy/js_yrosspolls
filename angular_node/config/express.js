var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');

module.exports = function () {

    var app = express();

    app.use(logger('dev'));

    // Gerenciador de templates http://embeddedjs.com
    app.set('view engine', 'ejs');

    // Pasta onde ficam os arquivos de templates
    app.set('views', './app/views');            

    // Pasta com recursos estáticos: html, js, css, etc    
    app.use(express.static('./public'));        
    app.use(bodyParser.urlencoded({extended: true}));

    // Efetua o parse dos dados da requisição para req.body
    app.use(bodyParser.json());

    // Parser "header cookies da req" para req.cookies e armazena o ID da sessão
    app.use(cookieParser());

    return app;
};