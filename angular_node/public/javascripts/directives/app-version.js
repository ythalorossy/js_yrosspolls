define(['./module'], function (directives) {
    'use strict';
    directives.directive("appVersion", function(){
        return {
            restrict    : 'EA',
            replace     : true,
            templateUrl : 'javascripts/directives/app-version-tpl.html',
            scope       : {
                version : '@version'
            }
        }
    });
});