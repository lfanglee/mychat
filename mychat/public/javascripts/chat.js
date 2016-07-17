var fontSizeT='20px';
var font_familyT="Microsoft YaHei,simsong";
var iT=false;
var boldT=false;
var msg=parent.msgP;
var min=parent.minP;

window.onload = function() {
    var chat = new Chat();
    chat.init();
};
var Chat = function() {
    this.socket = null;
};
Chat.prototype = {
    init: function() {
        var that = this;
        this.socket = io.connect();
        var nickName = document.getElementById('nickname').innerHTML;
        that.socket.emit('login', nickName);
        this.socket.on('system', function(nickName, userCount, type) {
            var msg = nickName + (type == 'login' ? ' joined' : ' left');
            that._displayNewMsg('system ', msg, 'red','20px','Microsoft YaHei,simsong','normal','normal');
            document.getElementById('status').textContent = userCount + (userCount > 1 ? ' users' : ' user') + ' online';

        });
        this.socket.on('newMsg', function(user, msg, color,fontSize,font_family,bold,i) {
            that._displayNewMsg(user, msg, color ,fontSize,font_family,bold,i);
            if(parent.minP===true){
                parent.msgP++;
            }
        });
        document.getElementById('sendBtn').addEventListener('click', function() {
            var messageInput = document.getElementById('messageInput'),
                msg = messageInput.value,
                color=null;
            messageInput.value = '';
            messageInput.focus();
            if (msg.trim().length != 0) {
                that.socket.emit('postMsg', msg, color , fontSizeT,font_familyT,boldT,iT);
                that._displayNewMsg('me', msg, color,fontSizeT,font_familyT,boldT,iT);
                return;
            };
        }, false);
        document.getElementById('messageInput').addEventListener('keyup', function(e) {
            var messageInput = document.getElementById('messageInput'),
                msg = messageInput.value,
                color = null;
            if (e.keyCode == 13 && msg.trim().length != 0) {
                messageInput.value = '';
                that.socket.emit('postMsg', msg, color,fontSizeT,font_familyT,boldT,iT);
                that._displayNewMsg('me', msg, color ,fontSizeT,font_familyT,boldT,iT);
            };
        }, false);
        document.getElementById('close-btn').addEventListener('click',function(){
            window.location='/logout';
        });
    },
    _displayNewMsg: function(user, msg, color,fontSize ,font_family,bold,i) {
        var container = document.getElementById('historyMsg'),
            timeToDisplay = document.createElement('p'),
            userToDisplay = document.createElement('span'),
            msgToDisplay = document.createElement('span'),
            fixclear = document.createElement('div'),
            date = new Date().toTimeString().substr(0, 8);
        fixclear.className = 'fixclear';
        timeToDisplay.style.color = '#000';
        msgToDisplay.style.color = color || '#000';
        userToDisplay.style.color = color || '#000';
        timeToDisplay.innerHTML = date;
        msgToDisplay.innerHTML = msg;
        userToDisplay.innerHTML = user;
        msgToDisplay.width = 'auto';
        userToDisplay.width = 'auto';
        userToDisplay.style.backgroundColor = 'grey';
        userToDisplay.style.fontSize = '15px';
        userToDisplay.style.padding = '2px';
        userToDisplay.style.borderRadius = '13px';
        userToDisplay.style.margin = '10px 5px 10px 5px';
        userToDisplay.style.lineHeight = '26px';
        msgToDisplay.style.backgroundColor = 'blue';
        msgToDisplay.style.fontSize = fontSize;
        if(bold===true){msgToDisplay.style.fontWeight='bold';}
            else{
                msgToDisplay.style.fontWeight='normal';
            }
        if(i===true){msgToDisplay.style.fontStyle='italic';}
        else{
            msgToDisplay.style.fontStyle='normal';
        }
        msgToDisplay.style.padding = '3px';
        msgToDisplay.style.borderRadius = '5px';
        msgToDisplay.style.fontFamily=font_family;
        msgToDisplay.style.margin = '10px';
        timeToDisplay.style.textAlign = 'center';

        if (user != 'me') {
            msgToDisplay.style.float = 'left';
            userToDisplay.style.float = 'left';
        } else {
            msgToDisplay.style.float = 'right';
            userToDisplay.style.float = 'right';
        }
        if (color != 'red') {
            container.appendChild(timeToDisplay);
            container.appendChild(userToDisplay);
            container.appendChild(msgToDisplay);
            container.appendChild(fixclear);
        } else {
            timeToDisplay.innerHTML += ' ' + user + msg;
            timeToDisplay.style.color = 'red';
            container.appendChild(timeToDisplay);
        }

        container.scrollTop = container.scrollHeight;
    }
};
