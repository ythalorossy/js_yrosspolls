define(['./module'], function(routes){

    routes.config(function($routeProvider, $locationProvider){

        $routeProvider.when('/', {
            templateUrl : 'partials/index.poll.actived.tpl.html'
        });
        
        $routeProvider.when('/admin', {redirectTo: '/admin/list'});

        $routeProvider.when('/admin/list', {
            templateUrl : 'partials/admin.poll.list.all.tpl.html',
            requirePermission : ['admin', 'supervisor']
        });

        $routeProvider.when('/admin/create', {
            templateUrl : 'partials/admin.poll.form.tpl.html',
            requirePermission : ['admin', 'supervisor']
        });

        $routeProvider.otherwise({redirectTo: '/'});
    });

});