//最新资讯  切换图片
var time=n=0,count;
$(document).ready(function(){
         count=$(".lb_list a").length;
         $(".lb_list a:not(:first-child)").hide();
         $(".lb_zi li").click(function(){
                 var i=$(this).text()-1;//得到li元素内的值（数字）
                 n=i;
                 if(i>=count)return;
                 $(".lb_list li").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
                 $(this).toggleClass("on");
                 $(this).siblings().removeAttr("class");
         })

})
//最新资讯 新闻轮播 定时器
$(document).ready(function(){
     function gd(){
         $('.new_gd_nei').fadeOut(500);
         $('.new_gd_nei').fadeIn(500);
     }
     setInterval(gd,1000);
    function newsgd($item, $gder){
         setTimeout(newsgd,2000,$item.next(),$gder);
         $item.slideUp(1000,function(){
             $item.appendTo($gder).show();
        });
     }
    newsgd($('.gder li:first'),$('.gder'));
})


