// Mantendo cache de polls em memória 
var polls = [
        {
            id:1000,
            title: 'Conseguiremos?', 
            active: true, 
            totalVotes: 1520, 
            items:[
               {id:105, title:'Yes', amount:9000}, 
                {id:106, title:'No', amount:1000}]
        },
        {
            id:1001,
            title: 'Angularjs + nodejs?', 
            active: false, 
            totalVotes: 10000, 
            items:[
               {id:103, title:'Yes', amount:9000}, 
                {id:104, title:'No', amount:1000}]}        
    ];

module.exports = function () {
    var controller = {};
    
    controller.index = function (req, res){
        res.render("./index");
    };
    
    controller.actived = function(req, res, next) {
        res.status(200).json({
            id:100, 
            title:'Conseguiremos?', 
            active:true, 
            totalVotes:1520, 
            items:[
               {id:101, title:'Yes', amount:90}, 
                {id:102, title:'No', amount:10}]});
    };
    
    controller.all = function(req, res, next) {
        res.status(200).json(polls);
    };
    
    controller.create = function(req, res, next){
        var poll = req.body;
        poll.id = Math.floor((Math.random() * 1000) + 1)
        polls.push(poll);
        res.status(200).json(poll);
    };
    
    controller.update = function(req, res, next){
        var poll = req.body;

        for (var i=0, l=polls.length;i<l;i++){

            if (polls[i].id == poll.id) {
                polls[i]==req.body;
                poll.isEdit=false;
            }
        }
        res.status(200).json(poll);
    }
    
    controller.vote = function(req, res, next){
        res.status(200).json(polls[0]);
    };
    
    return controller;
};