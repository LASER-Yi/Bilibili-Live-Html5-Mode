var re = /^http:\/\/live.bilibili.com/;

if(re.exec(window.location.href) != null){
    //创建一个script标签，写入替换的函数
    var add_script = document.createElement('script');
    add_script.innerHTML = '\
    function replace2H5(){ \
        console.log(ROOMID);\
            $.ajax({ \
                   url: "http://live.bilibili.com/api/h5playurl", \
                   type: "get",\
                   dataType: "jsonp",\
                   data: {\
                   roomid: ROOMID\
                   },\
                   async: false,\
                   success: function (data) {\
                   console.log("Successfully return html5 URL:" + data.durl[0].url);\
                   var h5Url = data.durl[0].url;\
                   var divElements = document.getElementById("player-container");\
                   var needDel = document.getElementById("player_object");\
                   divElements.removeChild(needDel);\
                   var h5Video = document.createElement("video");\
                   h5Video.setAttribute("src", h5Url);\
                   h5Video.setAttribute("width", "100%");\
                   h5Video.setAttribute("height", "100%");\
                   h5Video.setAttribute("id", "player_object");\
                   h5Video.setAttribute("controls", "controls");\
                   h5Video.setAttribute("autoplay", "autoplay");\
                   divElements.appendChild(h5Video);\
                   }\
                   });\
    } \
    var counterChange;\
    var counterFlag = false;\
    function judgeCanplayLast(){\
        var vidState = document.getElementById("player_object").readyState;\
        if(vidState == 4){\
            counterFlag = true;\
        }\
        if(vidState == 2 && counterFlag == true){\
            document.getElementById("player_object").load();\
            counterFlag = false;\
        }\
        counterChange = setTimeout("judgeCanplayLast()",2000);\
    } \
    replace2H5();\
    judgeCanplayLast()';

    //append this script to <body>
    document.body.appendChild(add_script);

}


//替换上的代码（位于播放器节点）

/*<div id="player-container" class="player-ctnr p-relative main-section">
 <video src = h5Url width="100%" height="100%" id="player_object" controls="controls" autoplay="autoplay"></video>
 </div>*/

//h5Url这个变量要加到头部的变量库中，然后通过ajax给他赋值（没必要）

//宝箱节点需要整个屏蔽，不然无法控制视频（叠层原因）（可能不用屏蔽，当时的网络加载不出来，估计就覆盖上去了。（已测试，不需要屏蔽宝箱节点）
//宝箱节点 class="box-doms"


