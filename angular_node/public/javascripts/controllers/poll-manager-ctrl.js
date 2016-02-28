define(['angular', './module'], function(angular, controllers){
    
    'use strict';
    
    controllers.controller('PollManageController', function($scope, Poll, Item){
    
        $scope.polls = [];
        $scope.poll = {active: false};

        $scope.refreshAllPolls = function(){
            
            Poll.getAll(function(data){
                $scope.polls = data.map(function(poll){
                    poll.isEdit = false;
                    poll.isNew = false;
                    return poll;
                });
            });
        };

        $scope.refreshAllPolls();

        // Add Item to Poll
        $scope.addItem = function(poll) {
            
            poll.items = poll.items || [];
            
            poll.items.push({
                id : 0,
                idpoll: poll.id, 
                title: "",
                amount: 0, 
                isNew : true,
                isEdit: false
            });
        };
        
        // Delete Item from Poll
        $scope.deleteItem = function(poll, item) {
            if (item.id != 0) {
                Item.delete({item: item}, function(data){
                    poll = data;
                });
            } 
            poll.items.splice(poll.items.indexOf(item), 1);
        };

        // Prepare Poll to edition
        $scope.prepareEdit = function(poll) {
            poll.isEdit = true;
        };

        // Cancel the edition of Poll
        $scope.cancel = function(poll) {
            
            poll.items = poll.items.filter(function(item) {
                return !item.hasOwnProperty('isNew') || !item.isNew;
            });
            
            poll.isEdit = false;
        };
    
        // Save Poll
        $scope.save = function(poll) {
            
            (function (poll) {
                delete poll.isNew; 
                delete poll.isEdit;
                 
                poll.items = poll.items.map(function (item) {
                    delete item.isNew;
                    delete item.isEdit;
                    return item;
                });
            })(poll);
            
            (!poll.id) 
                ? Poll.save(poll, function(data){
                    poll = data;
                })
                : Poll.update(poll, function(data){
                    poll = data;
                });
            
            poll.isEdit = false;
        };
    });

});