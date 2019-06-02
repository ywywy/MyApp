const express = require('express');
const router = express.Router();
const md5 = require('md5');
const user = require('../models/user'); //users集合


router.get("/", function (req, res) {
    res.render("demo");
});
module.exports = router;