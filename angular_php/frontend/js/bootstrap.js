/**
 * bootstraps angular onto the window.document node
 */
define([
    'require', 
    'angular',
    'app'
], function(require, ng){

    'use strict'
    
    require(['domReady!'], function(document){
        
        ng.module('app').run(['$rootScope', function($rootScope){
            $rootScope.$on('$routeChangeStart', function(event, next){
                //console.info(event);
                console.info(next.requirePermission);
            });
        }]);
        
        ng.bootstrap(document, ['app']);
    });
    
});