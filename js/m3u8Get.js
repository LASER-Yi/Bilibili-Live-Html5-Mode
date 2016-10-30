function m3u8Get(roomID){
var outData = $.ajax({
    url: 'http://live.bilibili.com/api/h5playurl',
    type: 'get',
    dataType: 'jsonp',
    data:{
        roomid: roomID
    },
    jsonpCallback : "miaomiaomiao",
});
return outData
}