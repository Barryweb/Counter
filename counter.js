// 當頁面準備完成時才讀取
$(document).ready(function () {
    //當視窗捲動時
    $(window).scroll(function () {
        var offset = $("#test").offset();       //取得元素位移資料
        var top = offset.top;                   //上方
        var left = offset.left;                 //左方   
        // console.log("元素的上方:" + top);
        var windowTop = $(window).scrollTop();
        // console.log("視窗的上方:" + windowTop);
        if (windowTop > top) {
            // 選取動畫({參數},{選項})
            $('#test').animate({
                num: 999
            }, {
                duration: 2000,
                step: (now) => {
                    $("#test").text(Math.floor(now));
                }
            })
        }
    });
});