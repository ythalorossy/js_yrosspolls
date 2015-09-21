define(['./module'], function(routes){

    routes.config(function($routeProvider, $locationProvider){
        console.log("Angular router: /admin");

        $routeProvider.when('/', {
            templateUrl : 'partials/index.poll.actived.tpl.html'
        });
        
        $routeProvider.when('/admin', {
            templateUrl : 'partials/admin.poll.list.all.tpl.html',
            requirePermission : ['admin', 'supervisor']
        });

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