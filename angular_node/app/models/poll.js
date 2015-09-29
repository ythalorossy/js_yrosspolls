var 
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = function (app) {
    
    
    
    var schema = Schema({
        title : {type: String, required: true, index : {unique: true}},
        active : {type: Boolean, required: true},
        totalVotes :  Number,
        
        items: [],
    });
    
    return mongoose.model('Poll', schema);
};