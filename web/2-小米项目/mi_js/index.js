// banner 轮播图
$(function(){
    var len = $(".banner_lunbo ul.list li").length;
    var $index =len-1;
    var times =null;

    //点击计数器
    $(".banner_lunbo ul.list li").click(function(){
        $index= $(this).index()
        //给计数器添加当点击的效果
        prevNext()
    })

    //点击下一张
    $(".banner_lunbo .btn .next").click(function(){
        $index++;
        if($index>=len){
            $index=0;
        }
        prevNext()
    })
    //点击上一张
    $(".banner_lunbo .btn .prev").click(function(){
        $index--;
        if($index<0){
            $index = len-1;
        }
        prevNext()
    })
    function prevNext(){
        $(".banner_lunbo ul.list li").eq($index).addClass("on").siblings().removeClass("on")
        $(".banner_lunbo .pic li").eq($index).fadeIn(1000).siblings().fadeOut(800);
    }
    //定时器
    function autoPlay(){
        times =setInterval(function(){
            $index++;
                if($index>=len){
                    $index=0;
                }
                prevNext()
        },2000)
    }
    autoPlay()
    //鼠标经过banner_lunbo
    $(".banner_lunbo").hover(function(){
        clearInterval(times)
    })
})

// 购物车
$(".shopping_car").hover(function(){
    $(".shopping_car .pro").slideDown(500)
},function(){
    $(".shopping_car .pro").slideUp(500)
})


// 侧边栏
$(function(){
 var $ol = $(".site_categor ul li .show_pro ol")
    $ol.each(function(i){
        var len =  $(".site_categor ul li .show_pro").eq(i).find("ol").length

         $(".site_categor ul li .show_pro").eq(i).innerWidth(len*248+"px")
    })
 
})


//导航下拉菜单
var index =0
$(".wrap>ul li").click(function(){
    index = $(this).index()//获取ul li的下标
    //导航的类名切换
    $(this).addClass("on").siblings().removeClass("on")
    //内容根据导航的切换而切换
$(".content div").eq(index).css("display","block").siblings().css("display","none")
})

