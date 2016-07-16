var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js'),
    crypto = require('crypto'),
    TITLE_REG = '注册';

router.get('/', function(req, res) {
  res.render('reg',{title:TITLE_REG});
});

router.post('/', function(req, res) {
  var userName = req.body.UserName;
  
  //检查用户名是否已经存在
  User.getUserNumByName(userName, function (err, results) {        
             
      if (results != null && results[0]['num'] > 0) {
          err = '用户名已存在';
          console.log(userName);
          res.send({status:"failed", message:err});
      }

      if (err) {
          res.locals.error = err;
          // res.render('reg', { title: TITLE_REG });
          return;
      }
      else{
        res.send({status:'success',message:'ok'});
      }
    });        
});

module.exports = router;