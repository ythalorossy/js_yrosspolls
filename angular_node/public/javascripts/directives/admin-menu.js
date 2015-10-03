define(['./module'], function (directives) {
    'use strict';
    directives.directive("adminMenu", function(){
        return {
            restrict    : 'E',
            replace     : true,
            templateUrl : 'javascripts/directives/admin-menu-tpl.html'
        }
    });
});