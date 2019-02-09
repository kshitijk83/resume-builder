var express = require("express");
var router = express.Router();
var User = require("../models/user");

router.get("/data", function (req, res) {
 User.find({username: req.user.username},function(err, user){
   if(err){
     console.log(err);
     res.json({user: user, success: false, err: err});    
   } else {
  res.json({user: user, success: true});    
   }
 });
});
 
router.post("/data", function(req, res){
    // User.find({token: req.user.token}, function(err, user){
    //     if(err){
    //         console.log(err);
    //     }
    //     else {
    //         user.data = req.json.data;
    //         user.save();
    //     }
    //     res.json({success: true});
    // });
    var user = {
        data: req.body
    }
    User.create(user, function(err, data){
        if(err){
            console.log(err)
        } 
        else
        {
            res.send("done done done")
        }
    })
    let x = req.body;
    console.log(x);
});

module.exports = router; 

