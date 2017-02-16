var objectID = schema.objectID;
var schema = mongoose.schema({
    fname: String,
    lname: String,
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String
})