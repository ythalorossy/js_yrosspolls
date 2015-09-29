define(['./module'], function(controllers){
    'use strict';
    controllers.controller('PollIndexController', function($scope, $http, Poll, Item){

        $scope.isButtonVoteEnabled = false;
        $scope.isVoteComputed = false;
        $scope.isVisibleValues = false;
        $scope.console = "";
        $scope.poll = {};
        $scope.itemCurrentSelected = undefined;

        function refreshActivePoll (){
            Poll.actived(function(data){
                $scope.poll = data;
            });
        }

        refreshActivePoll();

        /********* Public Methods *********/

        $scope.selectItem = function(poll, itemPoll) {

            if ($scope.isVoteComputed) return;

            if ($scope.itemCurrentSelected == undefined) {
                itemPoll.amount++;
                $scope.itemCurrentSelected = itemPoll;
            } else {

                if ($scope.itemCurrentSelected == itemPoll) {
                    $scope.console = "items equals";
                } else {
                    itemPoll.amount++;
                    $scope.itemCurrentSelected.amount -= 1;
                    $scope.itemCurrentSelected = itemPoll;
                }

            }

            $scope.isButtonVoteEnabled = true;
        }

        $scope.vote = function() {
            if ($scope.itemCurrentSelected == undefined) return;
            Item.vote({poll: $scope.poll._id, item: $scope.itemCurrentSelected}, function(data){
                $scope.poll = data;
                $scope.isButtonVoteEnabled = false;
                $scope.isVisibleValues = true;
                $scope.isVoteComputed = true;
            });
        }

    
    })
});