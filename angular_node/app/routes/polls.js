module.exports = function (app) {
    
    var router = require('express').Router();

    router.route('/')
        .get(
            // Check if user are logged
            function(req, res, next){
                if (req.isAuthenticated()) {
                    return next();
                } else {
                    res.redirect('/auth');
                }
            },
            app.controllers.polls.index
        );

    router.route('/polls/actived')
        .get(app.controllers.polls.actived);

    router.route('/polls')
        .get(app.controllers.polls.all)
        .post(app.controllers.polls.saveOrUpdate)
        .put(app.controllers.polls.saveOrUpdate);

    router.route('/items/vote')
        .post(app.controllers.polls.vote);

    app.use(router);
};