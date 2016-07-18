var mysql = require('mysql');
var DB_NAME = 'nodesample';

var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'fang',
    password : '666666'
});

pool.on('connection', function(connection) {  
    connection.query('SET SESSION auto_increment_increment=1'); 
});  

function User(user){
    this.username = user.username;
    this.userpass = user.userpass;
}


pool.getConnection(function(err, connection) {

    var useDbSql = "USE " + DB_NAME;
    connection.query(useDbSql, function (err) {
         if (err) {
            console.log("USE Error: " + err.message);
            return;
         }
         console.log('USE succeed');
    });

    //保存数据
    User.prototype.save = function(callback) {
        var user = {
            username: this.username,
            userpass: this.userpass
        };

        var insertUser_Sql = "INSERT INTO userinfo(id,username,userpass) VALUES(0,?,?)";

        connection.query(insertUser_Sql, [user.username, user.userpass], function (err,result) {
            if (err) {
                console.log("insertUser_Sql Error: " + err.message);
                return;
            }

            console.log("save");
            callback(err,result);                     
        });       
    };

    //根据用户名得到用户数量
    User.getUserNumByName = function(username, callback) {

        var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM userinfo WHERE username = ?";

        connection.query(getUserNumByName_Sql, [username], function (err, result) {
            if (err) {
                console.log("getUserNumByName Error: " + err.message);
                return;
            }

            console.log("getUserNumByName");
            callback(err,result);                     
        });        
    };

    //根据用户名得到用户信息
    User.getUserByUserName = function(username, callback) {

        var getUserByUserName_Sql = "SELECT * FROM userinfo WHERE username = ?";

        connection.query(getUserByUserName_Sql, [username], function (err, results) {
            if (err) {
                console.log("getUserByUserName Error: " + err.message);
                return;
            }

            console.log("getUserByUserName");
            callback(err,results);                                 
        });        
    };
    connection.release();
 
});

module.exports = User;