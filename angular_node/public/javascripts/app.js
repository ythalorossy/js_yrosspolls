define([
    'angular',
    'angular-resource',
    'angular-route',
    './routes/index',
    './services/index',
    './controllers/index',
    './directives/index'
], function(ng){
    
    'use strict'
    return ng.module('app', [
        'ngResource',
        'ngRoute',
        'app.routes',
        'app.services',
        'app.controllers', 
        'app.directives'
    ]);

});