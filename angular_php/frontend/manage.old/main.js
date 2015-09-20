require.config({
    paths : {
        "boostrap"              : "../js/bootstrap/3.3.0/bootstrap",
        "angular"               : "../js/angular/1.3.2/angular",
        "angular-resource"      : "../js/angular/1.3.2/angular-resource",
        "angular-route"         : "../js/angular/1.3.2/angular-route",
        "app"                   : "../manage/app",
        "services"              : "../js/app/services/services",
        "pollManagerController" : "../js/app/controllers/PollManagerController",
        "directives"            : "../js/app/directives/directives"
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

require(['app', 'services', 'pollManagerController', 'directives'], 
    function(app) {
        console.info("Dependencies loaded");
        //angular.element(document).ready(function() {
        //    angular.bootstrap(document, ['yrosspoll']);
        //});
    }
);