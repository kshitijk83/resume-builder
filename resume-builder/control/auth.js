'use strict';

const crypto = require('crypto');
const User = require('../models/user');

const jwt = require('jsonwebtoken');
const passport = require("passport");
const bcrypt = require('bcrypt');

module.exports = {
    login: function (req, res, next) {
        passport.authenticate('local', { session: false }, (err, user, info) => {
            if (err || !user) {
                req.resp = {
                    statusCode: 400,
                    msg: "Something is not right"
                }
                next();
            }
            else {
                req.logIn(user, { session: false }, (err) => {
                    if (err) {
                        req.resp = {
                            status: 400,
                            msg: "Something is not right"
                        }
                        next();
                    } else {
                        const token = jwt.sign({
                            _id: user._id,
                            username: user.userName,
                        }, 'your_jwt_secret');
                        req.resp = {
                            statusCode: 200,
                            data: {
                                token: token
                            }
                        }
                        next();
                    }
                });
            }
        })(req, res, next);
    },
    signup: function (req, res, next) {
        User.findOne({ email: req.body.username }, function (err, user) {
            if (user) {
                req.resp = {
                    statusCode: 400,
                    msg: 'The email address you have entered is already associated with another account.'
                }
                next();
            };
            const password = bcrypt.hashSync(req.body.password, 10);
            user = new User({
                username: req.body.username,
                password: password,
            });

            user.save(function (err) {
                if (err) {
                    req.resp = {
                        statusCode: 500,
                        msg: err.message
                    }
                    req.logIn(user, { session: false }, (err) => {
                        if (err) {
                            req.resp = {
                                status: 400,
                                msg: "Something is not right"
                            }
                            next();
                        } else {
                            const token = jwt.sign({
                                _id: user._id,
                                username: user.userName,
                            }, 'your_jwt_secret');
                            req.resp = {
                                statusCode: 200,
                                data: {
                                    token: token
                                }
                            }
                            next();
                        }
                    });
                }
                // var token = new Token({ _id: user._id, token: crypto.randomBytes(16).toString('hex') });

                // token.save(function (err) {
                //     if (err) {
                //         req.resp = {
                //             statusCode: 500,
                //             msg: err.message
                //         }
                //         next();
                //     }

                // });
            });
        });
    },
}