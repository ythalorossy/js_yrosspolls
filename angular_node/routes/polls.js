var express = require('express');
var router = express.Router();

// Mantendo cache de polls em memória 
var polls = [
        {
            id:1000, 
            title: 'Conseguiremos?', 
            active: true, 
            totalVotes: 1520, 
            items:[
               {id:101, title:'Yes', amount:90}, 
                {id:102, title:'No', amount:10}]
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

router.get('/', function(req, res, next) {
    res.render("./index")
});

router.get('/polls/actived', function(req, res, next) {
  res.status(200).json({
        id:100, 
        title:'Conseguiremos?', 
        active:true, 
        totalVotes:1520, 
        items:[
           {id:101, title:'Yes', amount:90}, 
            {id:102, title:'No', amount:10}]});
});

router.get('/polls', function(req, res, next) {
    console.log(polls);
    res.status(200).json(polls);
});

router.post('/polls', function(req, res, next){
    var poll = req.body;
    poll.id = Math.floor((Math.random() * 1000) + 1)
    polls.push(poll);
    res.status(200).json(poll);
});

router.put('/polls', function(req, res, next){
    console.log(JSON.stringify(req.body));
    for (var i=0, l=polls.length;i<l;i++){
        if (polls[i]===req.body.id) {
            polls[i]==req.body;
        }
    }
    
    console.log(JSON.stringify(polls));
    
    res.status(200).json(poll);
});


router.post('/item/vote', function(req, res, next){
    res.status(200).json(polls[0]);
});


module.exports = router;
