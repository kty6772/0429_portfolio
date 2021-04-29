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

});
