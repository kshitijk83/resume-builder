var express = require("express");
var router = express.Router();
var fxn = require("../control/auth");

router.get("/", function (req, res) {
res.send("HELLO!")
});

router.get("/login", fxn.login, function (req, res) {
   console.log("AASSmzs/ldkcsk/.cfmsm sl/lg")
    res.send("sssssss")
});

// router.post("/signup", fxn.signup, function (req, res) {

//     res.send(req.resp)
// });

module.exports = router; 

