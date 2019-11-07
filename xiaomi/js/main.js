$(document).ready(function () {
    $(".headerTopNavLeft").find("a").eq(10).hover(function () {
        $(".code").stop().fadeIn(150);
    }, function () {
        $(".code").stop().fadeOut(150);
    });
    $(".code").mouseenter(function () {
        $(".code").stop().fadeIn(150);
    });
    $(".code").mouseleave(function () {
        $(".code").stop().fadeOut(150);
    });


    $(".cart").hover(function () {
        $(".cartText").stop().slideDown(200);
        $(".cart").css("backgroundColor", "whitesmoke");
        $(".cart").css("color", "darkred");
    }, function () {
        $(".cartText").stop().slideUp(200);
        $(".cart").css("backgroundColor", "#424242");
        $(".cart").css("color", "#b0b0b0");
    });
    $(".cartText").mouseenter(function () {
        $(".cartText").stop().fadeIn();
        $(".cart").css("backgroundColor", "whitesmoke");
        $(".cart").css("color", "darkred");
    });
    $(".cartText").mouseleave(function () {
        $(".cartText").stop().slideUp(200);
        $(".cart").css("backgroundColor", "#424242");
        $(".cart").css("color", "#b0b0b0");
    });


    $(".logo").hover(function () {
        $(".logo").stop().animate({left:'0px'},"fast");
    },function () {
        $(".logo").stop().animate({left:'-55px'},"fast");
    });


    $(".sign").hover(function () {
        $(".navMenu").stop().slideDown(400);
    },function () {
        $(".navMenu").stop().slideUp(400);
    });
    $(".navMenu").mouseenter(function () {
        $(".navMenu").stop().slideDown();
    });
    $(".navMenu").mouseleave(function () {
        $(".navMenu").stop().slideUp(400);
    });

    $(".ss").hover(function () {
        $(".navMenuContent").stop().show();
        $(".navMenuContent").siblings().stop().hide();
    },function () {
        $(".navMenuContent").stop().hide();
    });
    $(".navMenuContent").mouseenter(function () {
        $(".navMenuContent").stop().show();
    });


    $(".sa").hover(function () {
        $(".navMenuContent2").stop().show();
        $(".navMenuContent2").siblings().stop().hide();
    },function () {
        $(".navMenuContent2").stop().hide();
    });
    $(".navMenuContent2").mouseenter(function () {
        $(".navMenuContent2").stop().show();
    });

    $(".sb").hover(function () {
        $(".navMenuContent3").stop().show();
        $(".navMenuContent3").siblings().stop().hide();
    },function () {
        $(".navMenuContent3").stop().hide();
    });
    $(".navMenuContent3").mouseenter(function () {
        $(".navMenuContent3").stop().show();
    });

    $(".sc").hover(function () {
        $(".navMenuContent4").stop().show();
        $(".navMenuContent4").siblings().stop().hide();
    },function () {
        $(".navMenuContent4").stop().hide();
    });
    $(".navMenuContent4").mouseenter(function () {
        $(".navMenuContent4").stop().show();
    });

    $(".sd").hover(function () {
        $(".navMenuContent5").stop().show();
        $(".navMenuContent5").siblings().stop().hide();
    },function () {
        $(".navMenuContent5").stop().hide();
    });
    $(".navMenuContent5").mouseenter(function () {
        $(".navMenuContent5").stop().show();
    });

    $(".sf").hover(function () {
        $(".navMenuContent6").stop().show();
        $(".navMenuContent6").siblings().stop().hide();
    },function () {
        $(".navMenuContent6").stop().hide();
    });
    $(".navMenuContent6").mouseenter(function () {
        $(".navMenuContent6").stop().show();
    });

    $(".sg").hover(function () {
        $(".navMenuContent7").stop().show();
        $(".navMenuContent7").siblings().stop().hide();
    },function () {
        $(".navMenuContent7").stop().hide();
    });
    $(".navMenuContent7").mouseenter(function () {
        $(".navMenuContent7").stop().show();
    });



    $(".navTabLeft").find("li").eq(0).mouseenter(function () {
        $(".navTabContent").show();
    });
    $(".navTabContent").mouseenter(function () {
        $(".navTabContent").show();
    });
    $(".navTabContent").mouseleave(function () {
        $(".navTabContent").hide();
    });
    $(".navTabLeft").find("li").eq(0).mouseleave(function () {
        $(".navTabContent").hide();
    });
    $(".navTabLeft").find("li").eq(0).siblings().mouseenter(function () {
        $(".navTabContent").hide();
    });

    $(".navTabLeft").find("li").eq(1).mouseenter(function () {
        $(".navTabContent2").show();
    });
    $(".navTabContent2").mouseenter(function () {
        $(".navTabContent2").show();
    });
    $(".navTabContent2").mouseleave(function () {
        $(".navTabContent2").hide();
    });
    $(".navTabLeft").find("li").eq(1).mouseleave(function () {
        $(".navTabContent2").hide();
    });
    $(".navTabLeft").find("li").eq(1).siblings().mouseenter(function () {
        $(".navTabContent2").hide();
    });

    $(".navTabLeft").find("li").eq(2).mouseenter(function () {
        $(".navTabContent3").show();
    });
    $(".navTabContent3").mouseenter(function () {
        $(".navTabContent3").show();
    });
    $(".navTabContent3").mouseleave(function () {
        $(".navTabContent3").hide();
    });
    $(".navTabLeft").find("li").eq(2).mouseleave(function () {
        $(".navTabContent3").hide();
    });
    $(".navTabLeft").find("li").eq(2).siblings().mouseenter(function () {
        $(".navTabContent3").hide();
    });

    $(".navTabLeft").find("li").eq(3).mouseenter(function () {
        $(".navTabContent4").show();
    });
    $(".navTabContent4").mouseenter(function () {
        $(".navTabContent4").show();
    });
    $(".navTabContent4").mouseleave(function () {
        $(".navTabContent4").hide();
    });
    $(".navTabLeft").find("li").eq(3).mouseleave(function () {
        $(".navTabContent4").hide();
    });
    $(".navTabLeft").find("li").eq(3).siblings().mouseenter(function () {
        $(".navTabContent4").hide();
    });

    $(".navTabLeft").find("li").eq(4).mouseenter(function () {
        $(".navTabContent5").show();
    });
    $(".navTabContent5").mouseenter(function () {
        $(".navTabContent5").show();
    });
    $(".navTabContent5").mouseleave(function () {
        $(".navTabContent5").hide();
    });
    $(".navTabLeft").find("li").eq(4).mouseleave(function () {
        $(".navTabContent5").hide();
    });
    $(".navTabLeft").find("li").eq(4).siblings().mouseenter(function () {
        $(".navTabContent5").hide();
    });

    $(".navTabLeft").find("li").eq(5).mouseenter(function () {
        $(".navTabContent6").show();
    });
    $(".navTabContent6").mouseenter(function () {
        $(".navTabContent6").show();
    });
    $(".navTabContent6").mouseleave(function () {
        $(".navTabContent6").hide();
    });
    $(".navTabLeft").find("li").eq(5).mouseleave(function () {
        $(".navTabContent6").hide();
    });
    $(".navTabLeft").find("li").eq(5).siblings().mouseenter(function () {
        $(".navTabContent6").hide();
    });

    $(".navTabLeft").find("li").eq(6).mouseenter(function () {
        $(".navTabContent7").show();
    });
    $(".navTabContent7").mouseenter(function () {
        $(".navTabContent7").show();
    });
    $(".navTabContent7").mouseleave(function () {
        $(".navTabContent7").hide();
    });
    $(".navTabLeft").find("li").eq(6).mouseleave(function () {
        $(".navTabContent7").hide();
    });
    $(".navTabLeft").find("li").eq(6).siblings().mouseenter(function () {
        $(".navTabContent7").hide();
    });

    $(".navTabLeft").find("li").eq(7).mouseenter(function () {
        $(".navTabContent8").show();
    });
    $(".navTabContent8").mouseenter(function () {
        $(".navTabContent8").show();
    });
    $(".navTabContent8").mouseleave(function () {
        $(".navTabContent8").hide();
    });
    $(".navTabLeft").find("li").eq(7).mouseleave(function () {
        $(".navTabContent8").hide();
    });
    $(".navTabLeft").find("li").eq(7).siblings().mouseenter(function () {
        $(".navTabContent8").hide();
    });

    $(".navTabLeft").find("li").eq(8).mouseenter(function () {
        $(".navTabContent9").show();
    });
    $(".navTabContent9").mouseenter(function () {
        $(".navTabContent9").show();
    });
    $(".navTabContent9").mouseleave(function () {
        $(".navTabContent9").hide();
    });
    $(".navTabLeft").find("li").eq(8).mouseleave(function () {
        $(".navTabContent9").hide();
    });
    $(".navTabLeft").find("li").eq(8).siblings().mouseenter(function () {
        $(".navTabContent9").hide();
    });

    $(".navTabLeft").find("li").eq(9).mouseenter(function () {
        $(".navTabContent10").show();
    });
    $(".navTabContent10").mouseenter(function () {
        $(".navTabContent10").show();
    });
    $(".navTabContent10").mouseleave(function () {
        $(".navTabContent10").hide();
    });
    $(".navTabLeft").find("li").eq(9).mouseleave(function () {
        $(".navTabContent10").hide();
    });
    $(".navTabLeft").find("li").eq(9).siblings().mouseenter(function () {
        $(".navTabContent10").hide();
    });


    $(".mainad").find("p").click(function () {
        $(".mainad").slideUp();
    })
});