var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    console.log("hello");
    res.send({greeting:'hello'});
})

module.exports = router;