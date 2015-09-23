module.exports = function (app) {

    app.get('/', app.controllers.polls.index);

    app.get('/polls/actived', app.controllers.polls.actived);

    app.get('/polls', app.controllers.polls.all);

    app.post('/polls', app.controllers.polls.create);

    app.put('/polls', app.controllers.polls.update);

    app.post('/item/vote', app.controllers.polls.vote);
};