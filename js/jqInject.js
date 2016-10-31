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
           //成功后会把jsonp传到函数的参数中
           success: function (data) {
           console.log("Successful Return Html5 URL:" + data.durl[0].url);
           // h5 replace code
           //var h5Url = data.durl[0].url;
           }
           });
}

/*var divElements = document.getElementsById("player-container");
 var onclick_script = document.creatElement('script');*/

//替换上的代码

/*<div id="player-container" class="player-ctnr p-relative main-section">
<video src = h5Url width="100%" height="100%" id="player_object" controls="controls" autoplay="autoplay"></video>
</div>*/

//h5Url这个变量要加到头部的变量库中，然后通过ajax给他赋值

//宝箱节点需要整个屏蔽，不然无法控制视频（叠层原因）


