// 當頁面準備完成時才讀取
$(document).ready(function () {
    var offset = $("#test").offset();       //取得元素位移資料
    var top = offset.top;                   //上方
    var left = offset.left;                 //左方   
});