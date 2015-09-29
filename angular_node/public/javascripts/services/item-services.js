define(['./module'], function (services) {
    
    services.factory('Item', function ($resource) {
        return $resource('/items/:action', {}, {
            vote: {
                method: 'POST',
                params: {
                    action: 'vote'
                }
            },
            delete: {
                method: 'DELETE'
            }
        });
    });
});