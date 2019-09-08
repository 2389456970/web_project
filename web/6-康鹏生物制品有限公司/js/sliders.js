// JavaScript Document

$(document).ready(function(){
		var liLen = $(".product ul li").length; //.length:获取li的长度（个数）
		var num = 0;
		var liW = $(".product ul li").outerWidth(true);
		console.log(liW)
		$(".product ul").css({"width":liLen*liW + "px"});
		var ulW = $(".product ul").outerWidth(true);
		console.log(ulW)
		$(".product").eq(0).show().siblings().hide();/*eq(i):获取索引值为i的元素;show():显示元素;siblings():获取兄弟元素;hide():隐藏元素*/
		$(".item .slider ul li").eq(0).addClass("on");/*addClass():添加class*/
		$(".item .slider ul li").click(function(){
			var a = $(this).index();/*$(this):获取当前元素;index():获取索引值*/
			$(this).addClass("on").siblings().removeClass("on");
			$(".product ul").animate({marginLeft:-a*3*liW + "px"})
			return num = a;
			console.log(a);
			})
			
		function show(){  /*function 函数名(){}:封装函数*/
			num +=1;
			if(num>2){
				num = 0;
				
				}
			$(".product ul").animate({marginLeft:-num*3*liW + "px"})
			$(".item .slider ul li").eq(num).addClass("on").siblings().removeClass("on")
			}
			var lun = setInterval(function(){  /*setInterval():定义定时器*/
				show();
				},1000)
			
			$(".item").mouseover(function(){  /*mouseover():鼠标经过事件*/
				clearInterval(lun)  /*clearInterval():清除定时器*/
				})
			
			$(".item").mouseout(function(){   /*mouseout():鼠标离开事件*/
				lun= setInterval(function(){
				show();
				},1000)
				})
		})