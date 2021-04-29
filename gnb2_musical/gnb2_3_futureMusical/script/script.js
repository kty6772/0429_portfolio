$(function(){
    /*gnb메뉴 시작 */
    $("#mainMenu li.mainLi").mouseover(function(){
        $(this).children("ul").stop().slideDown(800);
        $("#bgDown").stop().slideDown(800);
    });

       $("#mainMenu li.mainLi").mouseout(function(){
        $(this).children("ul").stop().slideUp(800);
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





});
