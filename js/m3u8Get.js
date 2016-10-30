var roomID = 24065;

function m3u8Get(roomID) {
    //用.getJSON 和 .ajax都可以取到jsonp数据,只不过前者指定dataType是json,
    //后者可以对ajax进行精确的控制,不过$.post、$.get、$.getjson最终调用的还是ajax
    //只不过JQ对其进行了简单的封装.还有就是$.ajax返回的是readState:1,没记错的话应该
    //是XMLHttpRequest的状态，表示连接成功的意思吧,所以并不是JSON.刚开始没注意到,
    //以为是数据没传对(AE坑货)    2016/10/31 4:54 qqx
    var outData = $.ajax({
        //目标地址
        url: 'http://live.bilibili.com/api/h5playurl',
        type: 'get',
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: "miaomiaomiao",
        //url?后传的参数
        data: {
            roomid: roomID
        },
        //成功后会把jsonp传到函数的参数中
        success: function(json) {
            console.log(json);
        },
        error: function() {
            alert('fail');
        }
    });
    return outData
}
//执行函数,赋值只是为了log一下
var a = m3u8Get(roomID);
// console.log(a);