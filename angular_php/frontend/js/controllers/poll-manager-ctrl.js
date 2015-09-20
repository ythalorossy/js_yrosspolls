define(['./module'], function(controllers){
    'use strict';
    controllers.controller('PollManageController', function($scope, Poll, Item){
        $scope.polls = [];
        $scope.poll = {};

        $scope.refreshAllPolls = function(){
            Poll.getAll(function(data){
                $scope.polls = [];
                angular.forEach(data, function(poll){
                    poll.isEdit = false;
                    $scope.polls.push(poll);
                });
            });
        }

        $scope.refreshAllPolls();

        $scope.addItem = function(poll) {
            if (angular.isUndefined(poll.items)) poll.items = [];

            poll.items.push({
                id : 0,
                idpoll: poll.id, 
                title: "",
                amount: 0, 
                isNew : true
            });
        }

        $scope.deleteItem = function(poll, item) {
            if (item.id != 0) {
                Item.delete({item: item}, function(data){
                    poll = data;
                });
            } 
            poll.items.splice(poll.items.indexOf(item), 1);
        }

        $scope.prepareEdit = function(poll) {
            poll.isEdit = true;
        }

        // To remove all items marked as new 
        var discardNewItems = function(poll){
            return poll.items.filter(function(item){
                return typeof(item.isNew)==="undefined";
            })
        }

        // Cancel the edition of Poll
        $scope.cancel = function(poll) {
            poll.items = discardNewItems(poll);
            poll.isEdit = false;
        }

        function validateItems (items) {
            return items.filter(function(item){
                var isNew    = typeof(item.isNew)!=="undefined",
                    isDelete = typeof(item.isDelete)!=="undefined";

                return (!isNew && !isDelete) || (isNew && !isDelete && (item.title !== ""));
            });
        }

        $scope.save = function(poll) {
            console.log(poll);
            Poll.save({poll:poll}, function(data){
                poll = data;
            });

            poll.isEdit = false;
        }
    });

});