var re = /^http:\/\/live.bilibili.com/;

if(re.exec(window.location.href) != null){
    //var roomNum = ROOMID;
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
           console.log("Successfully return html5 URL:" + data.durl[0].url);
           console.log(data.durl[0].url);
           var h5Url = data.durl[0].url;
           //删除原有flash播放器
           var divElements = document.getElementById("player-container");
           var needDel = document.getElementById("player_object");
           divElements.removeChild(needDel);
           //插入H5播放器，设置其属性
           var h5Video = document.createElement('video');
           h5Video.setAttribute("src", h5Url);
           h5Video.setAttribute("width", "100%");
           h5Video.setAttribute("height", "100%");
           h5Video.setAttribute("id", "player_object");
           h5Video.setAttribute("controls", "controls");
           h5Video.setAttribute("autoplay", "autoplay");
           divElements.appendChild(h5Video);
           }
           });
}


//替换上的代码（位于播放器节点）

/*<div id="player-container" class="player-ctnr p-relative main-section">
 <video src = h5Url width="100%" height="100%" id="player_object" controls="controls" autoplay="autoplay"></video>
 </div>*/

//h5Url这个变量要加到头部的变量库中，然后通过ajax给他赋值（没必要）

//宝箱节点需要整个屏蔽，不然无法控制视频（叠层原因）（可能不用屏蔽，当时的网络加载不出来，估计就覆盖上去了。（待测试）
//宝箱节点 class="box-doms"


