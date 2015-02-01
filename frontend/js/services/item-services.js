define(['./module'], function (services) {
    
    services.factory('Item', function ($resource) {
        return $resource('http://localhost/yrosspolls/backend/service.php?action=:action', {
            callback: "JSON_CALLBACK",
            isArray: false
        }, {
            vote: {
                method: 'JSONP',
                params: {
                    action: 'vote'
                }
            },
            delete: {
                method: 'JSONP',
                params: {
                    action: 'deleteItem'
                }
            }
        });
    });
});