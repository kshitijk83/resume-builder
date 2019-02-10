var express = require("express");
var router = express.Router();
var fxn = require("../control/auth");

router.get("/", function (req, res) {
res.send("HELLO!")
});

router.post("/login", fxn.login, function (req, res) {
    res.send(req.resp)
});

router.post("/signup", fxn.signup, function (req, res) {
    res.send(req.resp)
});

module.exports = router; 

