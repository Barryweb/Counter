// 當頁面準備完成時才讀取
$(document).ready(function () {
    //當視窗捲動時
    // element == this
    $(window).scroll(function () {
        // 
        $("*").each(function (index, element) {
            var offset = $(this).offset();       //取得元素位移資料
            var top = offset.top;                   //上方
            var left = offset.left;                 //左方   
            // console.log("元素的上方:" + top);
            var windowTop = $(window).scrollTop();
            // console.log("視窗的上方:" + windowTop);

            // 獲取變數 數字 時間 位移
            var number = $(this).attr("data-counter-number");
            var time = $(this).attr("data-counter-time");
            var offset = $(this).attr("data-counter-offset");

            // console.log("數字"+ number);
            // console.log("時間"+ time);
            // console.log("位移"+ offset);

            // 判斷式
            //if(條件){程式}
            if (windowTop > top - offset) {
                // 選取動畫({參數},{選項})
                $(this).animate({
                    num: number     //數字
                }, {
                    duration: parseInt(time),   //時間
                    step: (now) => {             //步驟
                        $(this).text(Math.floor(now));  //文字步驟 - Math.floor()去小數點
                    }
                })
            }
        });
    });
});