var express = require('express'),
    app = express(),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    indexRoutes = require('./routes/index'),
    userRoutes = require('./routes/user');

    mongoose.connect("mongodb://localhost/resume_builder");
    app.use(express.static(__dirname + "/public"));
    

    app.use(passport.initialize());
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
    
    

app.use("/", indexRoutes);
app.use("/user/",userRoutes);
app.listen(3000, function(){
console.log("Server Started!!");
});    




























































































