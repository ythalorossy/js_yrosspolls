define(['app'], function(app){

    app.directive("appVersion", function(){
        return {
            restrict    : 'E', 
            transclude  : true,
            replace     : true,
            template    : '<span style="color:#ff0000"><ng-transclude></ng-transclude></span>'
        }
    });

});