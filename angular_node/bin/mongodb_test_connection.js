var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID("5601f2faec20069740f13785");

MongoClient.connect('mongodb://127.0.0.1:27017/polls', function (erro, db){
    if (erro) throw erro;
    console.log('Connect successful to MongoDB in mongodb://127.0.0.1:27017/polls');
    db.collection('polls')
        .findOne({_id: _idProcurado}, function (erro, poll) {
            if (erro) throw erro;
            console.log(poll.name);
    });
});
