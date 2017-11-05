/*导航栏 显示*/
$(function(){
    $('.nav_tu').click(function(){
        $(".nav_show").fadeIn();
    });
    $('.cha').click(function(){
        $(".nav_show").fadeOut();
    });
    $('.fang').click(function(){
        $(".text").toggle();
    });
});


