var express = require("express");
var router = express.Router();

router.get("/data", function (req, res) {
res.send("HELLO!")
});
module.exports = router; 

