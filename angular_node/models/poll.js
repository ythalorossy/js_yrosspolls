var mongoose = require('mongoose');

module.exports = function () {
    var schema = mongoose.Schema({
        title : {
            type: String, 
            required: true, 
            index : {
                unique: true
            }
        },
        active : {
            type: Boolean,
            required: true
        },
        totalVotes : {
            type: Number,
            required: true
        },
        items : {
            type: Array
        }
    });
    
    return mongoose.model('Poll', schema);
};