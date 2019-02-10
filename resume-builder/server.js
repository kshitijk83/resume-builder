var express = require('express'),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    indexRoutes = require('./routes/index'),
    User = require('./models/user'),
    ejs = require("ejs"),
    app = express(),
    bodyParser = require("body-parser"),
    userRoutes = require('./routes/user');
var mongoose = require('mongoose');
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require('bcrypt'),
    port = process.env.PORT || 5000;
var fxn = require("./control/auth")

var url = 'mongodb://localhost/resume_builder'
mongoose.connect(url, {
    useNewUrlParser: true
});
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

var cors = require('cors')

//var app = express()
app.use(cors())

app.all('*', function (req, res, next) {
    req.resp = {}
    next();
})

passport.use(new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password'
},
    function (userName, password, cb) {
        User.findOne({ userName: userName }, function (err, user) {
            if (err) {
                return cb(null, false, { message: "Some error from our side" });
            } else if (!user) {
                return cb(null, false, { message: 'No user existed with such username' });
            }
            else if (!bcrypt.compareSync(password, user.password)) {
                return cb(null, false, { message: "Your password is incorrect" });
            }
            else {
                return cb(null, user, { message: 'Logged In Successfully' });
            }
        });
    }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret'
},
    function (jwtPayload, cb) {
        return User.findOne({ _id: jwtPayload._id })
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));

app.all("*", function (req, res, next) {
    req.resp = {}
    next();
})

app.get("/", function (req, res) {
    console.log("AnAS/VCM");
    res.send("test");
});
app.post("/signup", fxn.signup,function (req, res, err) {
    if(err){
        console.log(err)
    }        console.log("dfsdfhtgndk")

    res.send(req.resp)
});

// app.post("/login",  function (req, res) {
//         res.send("sssssss")
//     });
app.use("/", indexRoutes);
app.use("/user/", userRoutes);
app.listen(port, function () {
    console.log("Server Started at " + port);
});




























































































