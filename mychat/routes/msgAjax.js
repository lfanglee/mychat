var express = require('express'),
    router = express.Router(),
    Msg = require('../models/msg.js');

router.get('/', function(req, res) {
    
});

router.post('/', function(req, res) {
    var Sender = req.body.sender,
        SendTime = req.body.sendTime,
        Content = req.body.content;

    var newMsg = new Msg({
    	sender : Sender,
    	sendTime : SendTime,
    	content : Content
    });
       
    newMsg.save(function(err, result) {
        if (err) {
            res.locals.error = err;
            return;
        }

        if (result.insertId > 0) {
            res.locals.success = '';
            res.send({status:'success',message:''});
        } else {
            res.locals.error = err;
        }
    });             
});

module.exports = router;