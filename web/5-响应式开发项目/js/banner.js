$(function(){
    var len = $(".banner ul.list li").length;
    var $index =len-1;
    var times =null;
    
    //点击计数器
    $(".banner ul.list li").click(function(){
        $index= $(this).index()
        //给计数器添加当点击的效果
        prevNext()
    })

    //点击下一张
    $(".banner .btn .next").click(function(){
        $index++;
        if($index>=len){
            $index=0;
        }
        prevNext()
    })
    //点击上一张
    $(".banner .btn .prev").click(function(){
        $index--;
        if($index<0){
            $index = len-1;
        }
        prevNext()
    })
    function prevNext(){
        $(".banner ul.list li").eq($index).addClass("on").siblings().removeClass("on")
        $(".banner .pic li").eq($index).fadeIn(1000).siblings().fadeOut(800);
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
    //鼠标经过banner
    $(".banner").hover(function(){
        clearInterval(times)
    })
})
