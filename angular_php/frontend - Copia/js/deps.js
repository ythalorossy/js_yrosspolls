require.config({
    baseUrl : "js/",
    paths : {
        bootstrap             : "bootstrap/3.3.0/bootstrap",
        angular               : "angular/1.3.2/angular",
        angularResource       : "angular/1.3.2/angular-resource",
        angularRoute          : "angular/1.3.2/angular-route",
        config                : "app/config",
        app                   : "app/app",
        services              : "app/services/services",
        pollIndexController   : "app/controllers/PollIndexController",
        directives            : "app/directives/directives"
    },
    shim: {
        'angular'                   : {  exports: 'angular' },
        'angularResource'           : ['angular'],
        'angularRoute'              : ['angular'],
        'config'                    : ['angularRoute'],
        'pollIndexController'       : ['services'],
        'app'                       : ['angular', 'angularResource', 'angularRoute', 'config', 'pollIndexController'], 
    }
});

