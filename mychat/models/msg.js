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

function Msg(msg){
    this.sender = msg.sender;
    this.sendTime = msg.sendTime;
    this.content = msg.content;
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

    //存储用户的聊天信息
    Msg.prototype.save = function(callback){
        var msg = {
            sender : this.sender,
            sendTime : this.sendTime,
            content : this.content
        };

        var insertMsg_Sql = "INSERT INTO msg(msgind,sender,sendTime,content) VALUES(0,?,?,?)";

        connection.query(insertMsg_Sql, [msg.sender, msg.sendTime, msg.content], function (err,result) {
            if (err) {
                console.log("insertMsg_Sql Error: " + err.message);
                return;
            }

            console.log("save");
            callback(err,result);                     
        });

    };

    Msg.prototype.selectAll = function(){
        var selectAll_SQL = "SELECT ";
    }


    connection.release();
 
});

module.exports = Msg;