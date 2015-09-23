/**
 * bootstraps angular onto the window.document node
 */
define([
    'require', 
    'angular',
    'app'
], function(require, ng){

    'use strict'
    
    // Chech with all DOM is loaded (ready)
    require(['domReady!'], function(document){
        
        ng.module('app').run(['$rootScope', function($rootScope){
            $rootScope.$on('$routeChangeStart', function(event, next){
                console.info(next.requirePermission);
            });
        }]);
        
        ng.bootstrap(document, ['app']);
    });
    
});