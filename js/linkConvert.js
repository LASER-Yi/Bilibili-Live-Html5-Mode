var re = /^http:\/\/live.bilibili.com/;

if(re.exec(window.location.href) != null){
    var roomid = window.location.href.match(/\d+/g);
    //这个function名与下面的js标签的callback=?对应,若脚本执行成功,result的值就会变成src中传回来的JSON
    function jsonpCallback(result) {
        // 测试是否取到JSON
        // console.log(result);
        console.log(result['durl'][0]['url']);
        var url = result['durl'][0]['url'];
    }
    var path = "http://live.bilibili.com/api/h5playurl?roomid=" + roomid + "&callback=jsonpCallback";
    document.write(" <script   language=javascript   src= " + path + "> <\/script> ");
    
}
