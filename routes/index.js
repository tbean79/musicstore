var express = require('express');
var fs = require('fs');
var router = express.Router();
var request = require('request')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('index.html', { root:  'public' });
});

module.exports = router;
