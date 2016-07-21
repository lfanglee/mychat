var express = require('express'),
    router = express.Router(),
    User = require('../models/user.js'),
    crypto = require('crypto'),
    TITLE_LOGIN = '登录';

router.get('/', function(req, res) {
    res.render('login',{title:TITLE_LOGIN});
});

router.post('/', function(req, res) {
    var userName = req.body.username,
        userPwd = req.body.password,
        isRem = req.body.isrem,
        md5 = crypto.createHash('md5');
       
    User.getUserByUserName(userName, function (err, results) {                            
        if(results[0]){
            userPwd = md5.update(userPwd).digest('hex');
            if(results[0].UserName != userName || results[0].UserPass != userPwd)
            {
                // res.locals.error = '用户名或密码有误';
                // res.render('login',{title:TITLE_LOGIN});
                res.send({status:'failed',message:'用户名或密码有误'});
                return;
            }
            else
            {
                if(isRem)
                {
                    res.cookie('islogin', userName, { maxAge: 60000 });                 
                }

                res.locals.username = userName;
                req.session.username = res.locals.username;  
                console.log(req.session.username);
                console.log(isRem+results);
                res.send({status:'success',message:''});
                return;
            } 
        }
        else{
            // res.locals.error = '用户不存在';
            // res.render('login',{title:TITLE_LOGIN});
            res.send({status:'failed',message:'用户不存在'});
            return;
        }
             
    });              
});

module.exports = router;