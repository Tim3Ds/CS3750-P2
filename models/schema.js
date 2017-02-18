var mongoose = require('mongoose');
var schema = mongoose.Schema;

// var schema = mongoose.schema({
//     fname: String,
//     lname: String,
//     username: {type: String, unique: true},
//     email: {type: String, unique: true},
//     password: String
// });

module.exports.User = mongoose.model('User', new Schema({
  id:           ObjectId,
  fname:        { type: String, required: '{PATH} is required.' },
  lname:        { type: String, required: '{PATH} is required.' },
  username:     { type: String, required: '{PATH} is required.', unique: true },
  email:        { type: String, required: '{PATH} is required.', unique: true },
  password:     { type: String, required: '{PATH} is required.' },
  data:         Object,
}));

//mongoose.model('ChatItUp', schema);