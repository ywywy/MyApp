const express = require('express');
const router = express.Router();
const md5 = require('md5');
const user = require('../models/user'); 


router.get("/", function (req, res) {
    console.log('reg')
    res.render("register");
})

router.post('/', function (req, res) {
    var usrInstance = new user({
        username: req.body.username,
        password: md5(req.body.password)
    });
    console.log('regqqqq')
    usrInstance.save();
    //res.end("jjjjj")
   res.redirect('/login');
})

module.exports = router;