define(['./module'], function(services) {
    
    console.info("services impl");
    
    services.factory('Poll', function ($resource) {
        
        return $resource('http://localhost/yrosspolls/backend/service.php?action=:action', {
            callback: "JSON_CALLBACK",
            isArray: false
        }, {
            actived: {
                method: 'JSONP',
                params: {
                    action: 'getActive'
                }
            },
            getAll: {
                method: 'JSONP',
                params: {
                    action: 'getAllPolls'
                },
                isArray: true
            },
            save: {
                method: 'JSONP',
                params: {
                    action: 'savePoll'
                }
            }
        });
    });
});