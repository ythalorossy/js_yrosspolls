define([], function() {
    
    function config($routeProvider){

        $routeProvider
        .when('/', {
            templateUrl : 'partials/poll.detail.tpl.html'
        })
        .when('/poll/list', {
            templateUrl : 'partials/poll.list.all.tpl.html'
        });
    };
    
    config.$inject=['$routeProvider'];

    console.info("Config complete");
    
    return config;
});