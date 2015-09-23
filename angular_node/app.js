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

module.exports = app;
