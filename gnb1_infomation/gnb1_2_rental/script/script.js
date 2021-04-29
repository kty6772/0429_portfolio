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


});
