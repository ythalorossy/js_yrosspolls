var mongoose = require('mongoose');

module.exports = function(){
  
    var schema = mongoose.Schema({
        title : {type: String, required: true, index : {unique: true}}, 
        amount : {type: Number, required: true} 
    });
    
    return mongoose.model('Item', schema);
};