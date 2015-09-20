define(['./module'], function(routes){

    routes.config(function($routeProvider, $locationProvider){
        $routeProvider.when('/', {
            templateUrl : 'partials/admin.poll.list.all.tpl.html',
            requirePermission : ['admin', 'supervisor']
        });

        $routeProvider.when('/list', {
            templateUrl : 'partials/admin.poll.list.all.tpl.html',
            requirePermission : ['admin', 'supervisor']
        });

        $routeProvider.when('/create', {
            templateUrl : 'partials/admin.poll.form.tpl.html',
            requirePermission : ['admin', 'supervisor']
        });

        $routeProvider.otherwise({redirectTo: '/'});
    });

});