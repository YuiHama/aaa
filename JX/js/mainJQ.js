$(document).ready(function () {
    $("li").eq(2).hover(function () {
        $(".hide").stop().slideDown(1000);
        $("a").eq(3).css("color", "darkred");
    }, function () {
        $(".hide").stop().slideUp(500);
        $("a").eq(3).css("color", "black");
    })
    $(".hide").hover(function () {
        $(".hide").stop().slideDown(1000);
    }, function () {
        $(".hide").stop().slideUp(500);
        $("a").eq(2).css("color", "black");
    })
})