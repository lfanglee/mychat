$(document).ready(function() {
    // 定义窗口的打开和关闭函数
    $('#desk ul li').click(function() {
        var itemName = $(this).attr('title');
        var itemImg = $(this).find('img').attr('src');

        if (itemName === 'QQ') {
            msgP = 0;
            minP = false;
        }

        $('#bottom-ul li h2').first().text(itemName);
        $('#bottom-ul img').first().attr('src', itemImg);
        // $('#bottom-ul').show();

        var bottomAppend = $('#bottom-ul li').first().html();
        if(itemName === 'QQ'){
            $("#bottom-ul li").remove('.QQ');
            $('#bottom-ul').append("<li class='QQ'>"+bottomAppend+"</li>");
        }
        if(itemName === 'Photo'){
            $("#bottom-ul li").remove('.Photo');
            $('#bottom-ul').append("<li class='Photo'>"+bottomAppend+"</li>");
        }
        if(itemName === 'Baidu'){
            $("#bottom-ul li").remove('.Baidu');
            $('#bottom-ul').append("<li class='Baidu'>"+bottomAppend+"</li>");
        }

        for (var i = 1; i < $('#bottom-ul li').length; i++) {
            $('#bottom-ul li').eq(i).css('display', 'inline-block');
        }

        $('.window').css({
            zIndex: '5'
        });
        $(this).next('div').css({
            zIndex: '6'
        });

        moveWindow($(this).next('div').attr('id'), $(this).next('div').attr('id'));

        var offsetLeft = $(this).offset().left;

        $(this).next('div').show().children('div').show().width(0);
        $(".title-frame").animate({ width: "100%", height: "26px" }, 300);
        $(".window-frame").animate({ width: "100%", height: "100%" }, 300);
    });
    $('.close-window').click(function() {
        $(this).parent().parent().hide();
        if($(this).parent().attr('title') === 'QQ'){
            $("#bottom-ul li").remove('.QQ');
        }
        if($(this).parent().attr('title') === 'Photo'){
            $("#bottom-ul li").remove('.Photo');
        }
        if($(this).parent().attr('title') === 'Baidu'){
            $("#bottom-ul li").remove('.Baidu');
        }
    });


    //定义窗口的最大化和向下还原
    $('.max-big').click(function() {
        if ($(this).parent().parent().css('width') === $('body').css('width')) {
            $(this).text('最大化');
            $(this).parent().parent().css({
                width: "74%",
                height: "75%"
            });
            autoCenter(g($(this).parent().parent().attr('id')));
        } else {
            $(this).text('向下还原');
            $(this).parent().parent().css({
                width: "100%",
                height: "100%"
            });
            removeCenter(g($(this).parent().parent().attr('id')));
        }
    });


    //动态为每个li添加点击事件
    $('#bottom-ul').delegate('li', 'click',function() {
        var temp = $(this).find('h2').text();
        var show = function(id) {
            document.getElementById(id).style.display = 'block';
        };
        msgP = 0;
        $('.window').css({
            zIndex: '5'
        });
        $(this).css({
            zIndex: '6'
        });
        if (temp === 'QQ') { show('qq'); $('#qq').css({
            zIndex: '6'
        });}
        if (temp === 'Photo') { show('photo'); $('photo').css({
            zIndex: '6'
        });}
        if (temp === 'Baidu') { show('baidu'); $('baidu').css({
            zIndex: '6'
        });}
    });
});



function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('daytime').innerHTML = h + ":" + m + ":" + s;

    if (msgP !== 0) {
        $('.QQ').find('p').text(msgP);
        $('.QQ').find('p').css('background', 'red');
        // g('tip').innerHTML = msgP;
        // g('tip').style.background = 'red';
    } else {
        $('.QQ').find('p').text('');
        $('.QQ').find('p').css('background', 'transparent');
        // g('tip').innerHTML = '';
        // g('tip').style.background = 'transparent';
    }


    setTimeout(function(){startTime();}, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function g(id) {
    return document.getElementById(id);
}

//窗口变小后自动居中
function autoCenter(element) {
    var bodyW = document.documentElement.clientWidth;
    var bodyH = document.documentElement.clientHeight;

    var elementW = element.offsetWidth;
    var elementH = element.offsetHeight;

    element.style.left = (bodyW - elementW) / 2 + 'px';
    element.style.top = (bodyH - elementH) / 2 + 'px';

}

//窗口变大后取消居中的效果
function removeCenter(element) {
    element.style.left = 0;
    element.style.top = 0;
}

var mouseOffsetX = 0;
var mouseOffsetY = 0;

var isDraging = false;

function moveWindow(windowTitle, window, isDraging) {
    //监听鼠标在标题栏上按下的事件
    g(windowTitle).addEventListener('mousedown', function(e) {
        $('.window').css({
            zIndex: '5'
        });
        $(this).css({
            zIndex: '6'
        });
        var e = e || window.evet;
        console.log(isDraging);
        mouseOffsetX = e.pageX - g(window).offsetLeft;
        mouseOffsetY = e.pageY - g(window).offsetTop;

        isDraging = true;

        document.getElementById('qqmask').style.display = 'block';
        document.getElementById('photomask').style.display = 'block';
        document.getElementById('baidumask').style.display = 'block';
    });

    document.addEventListener('mousemove', function(e) {
        var e = e || window.event;
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        var moveX = 0;
        var moveY = 0;

        if (isDraging === true) {
            moveX = mouseX - mouseOffsetX;
            moveY = mouseY - mouseOffsetY;

            var pageWidth = document.documentElement.clientWidth;
            var pageHeight = document.documentElement.clientHeight;

            var dialogWidth = g(window).offsetWidth;
            var dialogHeight = g(window).offsetHeight;

            var maxX = pageWidth - dialogWidth;
            var maxY = pageHeight - dialogHeight;

            //moveX = Math.min(maxX, Math.max(0, moveX));
            moveY = Math.min(maxY, Math.max(0, moveY));

            g(window).style.left = moveX + 'px';
            g(window).style.top = moveY + 'px';
        }
    });
    document.addEventListener('mouseup', function() {
        isDraging = false;
        document.getElementById('qqmask').style.display = 'none';
        document.getElementById('photomask').style.display = 'none';
        document.getElementById('baidumask').style.display = 'none';
    });
}

var msgP = 0;
var minP = false;

window.onload = function() {
    startTime();

    $('.min').click(function() {
        if($(this).parent().attr('title') === 'QQ'){
            minP = true;
            g('qq').style.display = 'none';
        }
        if($(this).parent().attr('title') === 'Photo'){
            g('photo').style.display = 'none';
        }
        if($(this).parent().attr('title') === 'Baidu'){
            g('baidu').style.display = 'none';
        }
    });

};
