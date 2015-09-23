// Prepare all angular modules 
define([
    'angular',
    'angular-resource',
    'angular-route',
    './routes/index',       // Router modules
    './services/index',     // Service modules
    './controllers/index',  // Controller modules
    './directives/index'    // Directive modules
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