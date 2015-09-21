define(['./module'], function(services) {
    
    services.factory('Poll', function ($resource) {
        
        return $resource('/polls/:action', {
            
        }, {
            actived: {
                method: 'GET',
                params: {
                    action: 'actived'
                }
            },
            getAll: {
                method: 'GET',
                isArray: true
            },
            save: {
                method: 'POST'
            },
            update: {
                method: 'PUT'
            }
        });
    });
});