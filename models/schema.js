var mongoose = require('mongoose');
var schema = mongoose.Schema;

var schema = mongoose.schema({
    fname: String,
    lname: String,
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String
});

mongoose.model('ChatItUp', schema);