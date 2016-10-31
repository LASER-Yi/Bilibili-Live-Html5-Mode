var re = /^http:\/\/live.bilibili.com/;

if(re.exec(window.location.href) != null){
    var roomNum = ROOMID;
    $.ajax({
           //目标地址
           url: 'http://live.bilibili.com/api/h5playurl',
           type: 'get',
           dataType: 'jsonp',
           //url?后传的参数
           data: {
           roomid: roomNum
           },
           //成功后会把jsonp传到函数的参数中
           success: function (data) {
           console.log(data.durl[0].url);
           //document.write(data.durl[0].url);
           
           }
           });
}
