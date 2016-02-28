module.exports = function (app) {
    'use strict';
    var Poll = app.models.poll,
        Item = app.models.item,
        controller = {};
    
    controller.index = function (req, res, next) {
        res.render("index");
    };
    
    controller.actived = function(req, res, next) {
        
        Poll
            .findOne({'active': true})
            .exec()
            .then(function(poll){
                res.status(200).json(poll);
            });
    };
    
    controller.all = function (req, res) {
        Poll.find().exec().then(
            function (polls) {
                res.status(200).json(polls);
            },
            function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };
    
    controller.findById = function (req, res) {
        var _id = req.params.id;
        Poll.findById(_id).exec().then(
            function (poll) {
                if (!poll) throw new Error("Poll not found");
                res.json(poll);
            },
            function (erro) {
                console.log(erro);
                res.status(404).json(erro);
            }
        );
    };
    
    controller.delete = function(req, res) {
        var _id = req.params.id;
        Poll.remove({"_id": _id}).exec().then(
            function () {
                res.end();
            },
            function (erro) {
                return console.error(erro);
            }
        );
    };
    
    controller.saveOrUpdate = function(req, res, next){
        
        var _id = req.body._id;
        
        console.log(req.body);
        
        if (_id) {
        
            Poll.findByIdAndUpdate(_id, req.body).exec()
                .then(function(poll){
                    res.status(200).json(poll);
                },
                function(erro){
                    console.log(erro);
                    res.status(500).json(erro);
                }
            );
        
        } else {
            try {
                var poll = new Poll({
                    title: req.body.title,
                    active: req.body.active,
                    totalVotes : req.body.totalVotes,
                    items: req.body.items
                });
                
                poll.save(function(err, poll){
                    if (err) console.error(err);
                });
            } catch (err) {
                console.error(err);
            }
        }
    };
    
    controller.vote = function(req, res){

        var _id = req.body.poll;
        
        Poll.findById(_id).then(function(poll){
            
            for (var i=0, l=poll.items.length; i < l; i++) {
            
                if (poll.items[i].title === req.body.item.title) {
                    poll.totalVotes += 1;
                    poll.items[i].amount += 1;
                    break;
                }
            }
        
            Poll.findByIdAndUpdate(poll._id, poll, function(err, poll){
                if (err) console.error(err);
            });
            
            res.status(200).json(poll);
        });
    };
    
    return controller;
};