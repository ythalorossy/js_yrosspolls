define(['./module'], function (services) {
    
    services.factory('Item', function ($resource) {
        return $resource('/item/:action', {
            isArray: false
        }, {
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