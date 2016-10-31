var re = /^http:\/\/live.bilibili.com/;

if(re.exec(window.location.href) != null){
    var roomID = 5067
    $.ajax({
           //目标地址
           url: 'http://live.bilibili.com/api/h5playurl',
           type: 'get',
           dataType: 'jsonp',
           //url?后传的参数
           data: {
           roomid: roomID
           },
           //成功后会把jsonp传到函数的参数中
           success: function(json) {
           console.log(json);
           }
           });
}
