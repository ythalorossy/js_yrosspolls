define(['app', 'angularResource'], function() {

    console.info("Loading Services");
    
    function services($provider) {
        
        console.info($provider);
        $provider.factory('Poll', ['$resource',
            function($resource){
                return $resource('http://localhost/yrosspolls/backend/remote.php?action=:action', {callback: "JSON_CALLBACK", isArray: false}, 
                {
                    actived : { method:'JSONP', params:{action:'getActive'}},
                    getAll  : { method:'JSONP', params:{action: 'getAllPolls'}, isArray: true},
                    save    : { method:'JSONP', params:{action: 'savePoll'}}
                }
            );
        }]);

        $provider.factory('Item', ['$resource', function($resource){
            return $resource('http://localhost/yrosspolls/backend/remote.php?action=:action', {callback: "JSON_CALLBACK", isArray: false}, 
            {
                vote: {method:'JSONP', params:{action:'vote'}},
                delete : {method:'JSONP', params:{action:'deleteItem'}}
            });
        }]);
    }
    
    services.$inject=['$provider'];
        
    return services;
    //return app;
});