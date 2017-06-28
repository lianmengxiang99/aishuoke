$(document).ready(function () {
    //首页轮播
    var mySwiper = new Swiper('.swiper-container1', {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
        paginationClickable: true,

//pagination : '#swiper-pagination1',
    });
    $("div.img>ul>li:first-child").siblings().css({
        "marginTop": "12px",
    });
    //关于我们hover效果
    $("div.img>ul>li").hover(function () {
        var index = $(this).index();
        $("div.img>ul>li>div").hide();
        $("div.img>ul>li").removeClass("color");
        $(this).addClass("color");
        $(this).children("div").show();
        $("div.img>img").get(0).src = "img/download" + index + ".jpg";
        console.log(index);
    });
    //点击tab切换
    $("div.tab>div").on("click", function () {
        var index = $(this).index();
        console.log(index);
        $("div.tab>div").removeClass("bg");
        $(this).addClass("bg");
        $("div.switch").animate({
            marginLeft: -1100 * index + "px"
        }, 500);
    });
    $("ul.delay>a>li>img").hover(function () {
        oWidth = $(this).width();
        oHeight = $(this).height();
        oLeft = parseInt($(this).css("left"));
        oTop = parseInt($(this).css("top"));
        var oWidth2 = oWidth * 1.2;
        var oHeight2 = oHeight * 1.2;
        var oLeft2 = oLeft - (oWidth2 - oWidth) / 2;
        var oTop2 = oTop - (oHeight2 - oHeight) / 2;
        $(this).stop().animate({left: oLeft2, top: oTop2, width: oWidth2, height: oHeight2}, 200);
    }, function () {
        $(this).stop().animate({left: oLeft, top: oTop, width: oWidth, height: oHeight}, 200)
    });
// 首页滚动
    $(window).scroll(function () {
        console.log($(window).scrollTop())
        if ($(window).scrollTop() >= 296&&$(window).scrollTop() <750) {
            $("div.about").addClass("about1");
        } else if ($(window).scrollTop() >= 750&&$(window).scrollTop() < 1520) {
            $("div.switch").addClass("switch1");
        } else if ($(window).scrollTop() >=1520){
            $("div.case>ul>a").addClass("animate");
        }
    });
    $("div.link").hover(function () {
       $("div.hoverLink").show();
        $(this).hide();
    });
});