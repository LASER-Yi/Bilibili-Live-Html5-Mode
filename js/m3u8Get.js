function m3u8Get(roomNum) {
    //我问了一下大黄，这个东西如果要使用的话剩下的操作就要完全放到success中去执行，
    //因为这是个异步执行的代码，中间的success还没有拿到东西函数就把outData return回去了
    //然而我们写的是脚本，所以可能用不上jq，
    //很尴尬
    //ly
    var outData;
    $.ajax({
           //目标地址
           url: 'http://live.bilibili.com/api/h5playurl',
           type: 'get',
           dataType: 'jsonp',
           //url?后传的参数
           data: {
           roomid: ROOMID
           },
           async: false,
           //成功后会把jsonp传到函数的参数中
           success: function (data) {
           console.log(data.durl[0].url);
           document.write(data.durl[0].url);
           outData = data.durl[0].url;
           }
           });
    return outData;
}
