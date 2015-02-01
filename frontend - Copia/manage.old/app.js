define(['angular', 'angular-resource', 'angular-route'], function(angular) {

    var app = angular.module('yrosspoll', ['ngResource', 'ngRoute']);

    app.config(function($routeProvider){

        $routeProvider.when('/', {
            templateUrl : 'partials/poll-list-all.tpl.html'
        });

        $routeProvider.when('/list', {
            templateUrl : 'partials/poll-list-all.tpl.html'
        });

        $routeProvider.when('/create', {
            templateUrl : 'partials/poll-form.tpl.html'
        });

        $routeProvider.otherwise({redirectTo: '/'});
    });
    
    return app;
});