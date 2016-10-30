var re = /^http:\/\/live.bilibili.com/;

if(re.exec(window.location.href) != null){
    var roomid = window.location.href.match(/\d+/g);
    function jsonpCallback(result) {
        console.log(result);
        console.log(result['durl'][0]['url']);
        var url = result['durl'][0]['url'];
        window.open(url);
    }
    var path = "http://live.bilibili.com/api/h5playurl?roomid=" + roomid + "&callback=jsonpCallback";
    document.write(" <script   language=javascript   src= " + path + "> <\/script> ");
}
