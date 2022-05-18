//schema di user
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('User', new Schema({ 
    email: String,
    name: String,
    username: String,
    attacco: Number, 
    difesa: Number, 
    spin: Number, 
    controllo: Number, 
    all_around: Number
}));