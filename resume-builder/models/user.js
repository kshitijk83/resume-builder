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
    isVerified: {
        type: Boolean, 
        default: false
    }
});
adminSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("User", userSchema);
