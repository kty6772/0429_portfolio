$(function(){
    /*gnb메뉴 시작 */
    $("#mainMenu li.mainLi").mouseover(function(){
        $(this).children("ul").stop().slideDown(800);
        $("#bgDown").stop().slideDown(800);
    });

       $("#mainMenu li.mainLi").mouseout(function(){
        $(this).children("ul").stop().slideUp(800);
           $("#bgDown").stop().slideUp(800);
    });




        /*gnb메뉴 끝 */

    /*극장 소개 이미지 클릭 이벤트 시작 */
    $("#si1").click(function(){
        $("#i1").css({"display":"block"});
        $("#i2").css({"display":"none"});
        $("#i3").css({"display":"none"});
        $("#i4").css({"display":"none"});
        $("div#sogaeImg a").css({"padding-top":"9px"});
    });

    $("#si2").click(function(){
        $("#i2").css({"display":"block"});
        $("#i1").css({"display":"none"});
        $("#i3").css({"display":"none"});
        $("#i4").css({"display":"none"});
        $("div#sogaeImg a").css({"padding-top":"9px"});
    });

      $("#si3").click(function(){
        $("#i3").css({"display":"block"});
        $("#i1").css({"display":"none"});
        $("#i2").css({"display":"none"});
        $("#i4").css({"display":"none"});
        $("div#sogaeImg a").css({"padding-top":"9px"});
    });

     $("#si4").click(function(){
        $("#i4").css({"display":"block"});
        $("#i1").css({"display":"none"});
        $("#i2").css({"display":"none"});
        $("#i3").css({"display":"none"});
         $("div#sogaeImg a").css({"padding-top":"9px"});
    });

        /*극장 소개 이미지 클릭 이벤트 끝 */


    /* gnb2_1_NowMusical 멀티탭 구현*/
    $("#tabName #Tab1").click(function(){
       $("div#eventTab").css({"display":"block"});
        $("div#musicInfo").css({"display":"none"});
        $("div#casting").css({"display":"none"});
        $("div#actor").css({"display":"none"});
        $("div#discount").css({"display":"none"});
        $("div#wrap").css({"height":"1500px"});
    });

    $("#tabName #Tab2").click(function(){
       $("div#musicInfo").css({"display":"block"});
       $("div#eventTab").css({"display":"none"});
        $("div#casting").css({"display":"none"});
        $("div#actor").css({"display":"none"});
        $("div#discount").css({"display":"none"});
        $("div#wrap").css({"height":"6100px"});
    });

    $("#tabName #Tab3").click(function(){
       $("div#casting").css({"display":"block"});
        $("div#musicInfo").css({"display":"none"});
        $("div#eventTab").css({"display":"none"});
        $("div#actor").css({"display":"none"});
        $("div#discount").css({"display":"none"});
        $("div#wrap").css({"height":"2500px"});
    });

    $("#tabName #Tab4").click(function(){
       $("div#actor").css({"display":"block"});
        $("div#musicInfo").css({"display":"none"});
        $("div#casting").css({"display":"none"});
        $("div#eventTab").css({"display":"none"});
        $("div#discount").css({"display":"none"});
        $("div#wrap").css({"height":"16500px"});
    });

    $("#tabName #Tab5").click(function(){
       $("div#discount").css({"display":"block"});
        $("div#musicInfo").css({"display":"none"});
        $("div#casting").css({"display":"none"});
        $("div#actor").css({"display":"none"});
        $("div#eventTab").css({"display":"none"});
        $("div#wrap").css({"height":"1800px"});
    });


        /* gnb2_1_NowMusical 멀티탭 구현*/


    /*gnb4_2_watchInfo 멀티탭 구현 */
    $("#btnArea span#btnArea2").click(function(){
        $(this).css({"background":"#b9a152"});
        $(this).css({"border-bottom":"none"});
        $(this).css({"color":"#fff"});
        $("#btnArea img").css({"left":"222px"});

        $("#btnArea span#btnArea1").css({"border":"1px solid #ddd"});
         $("#btnArea span#btnArea1").css({"background-color":"#fff"});
        $("#btnArea span#btnArea1").css({"color":"#777"});

        $("div#mainArea2").css({"display":"block"});
         $("div#mainArea1").css({"display":"none"});

    });

     $("#btnArea span#btnArea1").click(function(){
        $(this).css({"background":"#b9a152"});
        $(this).css({"border-bottom":"none"});
        $(this).css({"color":"#fff"});
        $("#btnArea img").css({"left":"65px"});

        $("#btnArea span#btnArea2").css({"border":"1px solid #ddd"});
         $("#btnArea span#btnArea2").css({"background-color":"#fff"});
        $("#btnArea span#btnArea2").css({"color":"#777"});

         $("div#mainArea2").css({"display":"none"});
         $("div#mainArea1").css({"display":"block"});
    });







        /*gnb4_2_watchInfo 멀티탭 구현 끝 */

    /*메인페이지 index.html div#gallery 슬라이드 시작 */
    var slideGo = setInterval(fnslide, 7000);

    function fnslide(){
//    $("#gallery #slideArea").animate({"marginLeft":"-320px"}, 1500, "swing", function(){
//       $("#gallery #slideArea a:first-child").insertAfter("#gallery #slideArea a:last-child");
//        $("#gallery #slideArea").css({"margin-left":"0"});

       $("#gallery #slideArea a").fadeOut(500);
        $("#gallery #slideArea a:nth-child(2)").fadeIn(1000, function(){
           $("#slideArea a:first-child").insertAfter("#slideArea a:last-child") ;

        });

        $("#slidePlay").fadeOut(500);
            $("#slidePlay").fadeIn(1000);

    };

    $("#slidePlay span:nth-child(2)").mouseover(function(){
        clearInterval(slideGo);
    });



     $("#slidePlay span:first-child").mouseover(function(){
        slideGo = setInterval(fnslide, 7000);
    });




        /*메인페이지 index.html div#gallery 슬라이드 끝*/





});
