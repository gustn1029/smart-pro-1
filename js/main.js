$(document).ready(function(){


    // 메뉴
    $(".navi > li").mouseover(function(){
        $(".bgmenu").stop().slideDown(500);
        $(".submenu").stop().slideDown(800);
    });
    $(".navi > li").mouseout(function(){
        $(".bgmenu").stop().slideUp(800);
        $(".submenu").stop().slideUp(500);
    });


    // 슬라이드
    var imgs = 2;
    var now = 0;
    start();

    function start() {
        $(".imgslide > a").eq(0).siblings().fadeOut(600);
        setInterval(function() {slide();}, 3000);
    }
    function slide() {
        now = now == imgs ? 0 : now += 1;
        $(".imgslide > a").eq(now - 1).fadeOut(600);
        $(".imgslide > a").eq(now).fadeIn(600);
    }


    // 팝업창 
    $(".notice li:first").click(function(){
        $("#layer").addClass("active");
    });
    $(".btn").click(function(){
        $("#layer").removeClass("active");
    });
});