require.config({
    paths : {
        "boostrap"              : "bootstrap/3.3.0/bootstrap",
        "angular"               : "angular/1.3.2/angular",
        "angular-resource"      : "angular/1.3.2/angular-resource",
        "angular-route"         : "angular/1.3.2/angular-route",
        app                     : "app/app.admin",
        services                : "app/services/services",
        "pollManagerController" : "app/controllers/PollManagerController",
        "directives"            : "app/directives/directives"
    },
    shim: {
        "angular": { 
            exports: "angular"
        },
        "angular-resource": {
            deps: ["angular"]
        },
        "angular-route": {
            deps: ["angular"]
        }
    }
});

require(['angular', 'app', 'services', 'pollManagerController', 'directives'], 
    function(app) {
        console.info("Dependencies loaded");
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['yrosspoll']);
        });
    }
);