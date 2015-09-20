define(['config', 'pollIndexController'], function(config, pollIndexController) {

    var app = angular.module('yrosspoll', ['ngRoute', 'ngResource']);
    
    app.config(config);
    
    app.controller(pollIndexController);
    
});