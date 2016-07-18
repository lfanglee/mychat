$(function() {
    $('#sendBtn').click(function() {
        if ($('#messageInput').val() !== '') {
        	var senderVal = $('#nickname').text(),
        		sendTimeVal = new Date().toTimeString().substr(0, 8),
        		contentVal = $('#messageInput').val();
            $.ajax({
                url: '/msgAjax',
                type: 'POST',
                dataType: 'json',
                data: {
                    sender: senderVal,
                    sendTime: sendTimeVal,
                    content: contentVal
                },
                success: function(data) {
                    if (data) {
                        if (data.status === 'success') {
                            console.log('done');
                        }
                    }
                }
            });
        }


    });
});
