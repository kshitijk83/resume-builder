const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

var userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    data: {
        
    },
    token: {
        type: String
    },
    tokenExpires: {
        type: Date
    }
});
adminSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("User", userSchema);