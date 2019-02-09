'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('models'),
    User = models.user;
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require('bcrypt');

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