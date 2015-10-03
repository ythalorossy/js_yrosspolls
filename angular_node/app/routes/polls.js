module.exports = function (app) {
    
    app.get('/', function(req, res, next){
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/auth');
        }
    });
    
    app.get('/', app.controllers.polls.index);

    app.get('/polls/actived', app.controllers.polls.actived);

    app.get('/polls', app.controllers.polls.all);

    app.post('/polls', app.controllers.polls.saveOrUpdate);

    app.put('/polls', app.controllers.polls.saveOrUpdate);

    app.post('/items/vote', app.controllers.polls.vote);
};