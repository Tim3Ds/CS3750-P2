var objectID = schema.objectID;
var schema = mongoose.schema({
    fname: String,
    lname: String,
    username: String,
    email: {type: String, unique: true},
    password: String
})