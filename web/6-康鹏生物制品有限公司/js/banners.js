// JavaScript Document



   	$(document).ready(function(){
		var liLen = $(".down .middle ul li").length;    //获取li的个数
		var liW = $(".down .middle ul li").outerWidth(true);  //获取li的宽度（包括外边距）
		var ulW = liLen*liW;    //计算ul的宽度
		$(".down ul").css({"width":ulW + "px"})
		$(".down ul li").eq(0).addClass("current");  //添加当前状态
		console.log(liW)
		/*左按钮点击事件*/
		$(".prev").click(function(){
			$(".down ul").css({marginLeft:-liW + "px"});
			$(".down ul li").eq(liLen-1).prependTo(".down ul");
			$(".down ul").animate({
				marginLeft:0 + "px"
				})
			$(".down ul li").eq(0).addClass("current").siblings().removeClass("current");
			var src = $(".down ul li").eq(1).children("img").attr("src");
			$(".top img").attr("src",src)
			})
		
		/*右按钮点击事件*/	
		$(".next").click(function(){
			$(".down ul").animate({
				marginLeft:-liW + "px"
				},function(){
					$(".down ul li").eq(0).appendTo(".down ul");
					$(".down ul").css({marginLeft:0 + "px"})
					})
			 $(".down ul li").eq(1).addClass("current").siblings().removeClass("current");
			 var src = $(".down ul li").eq(2).children("img").attr("src");
			 $(".top img").attr("src",src)
			})
		
		/*图片点击切换事件*/
		$(".down ul li").click(function(){
			var src = $(this).children("img").attr("src");
			$(".top img").attr("src",src)
			$(this).addClass("current").siblings().removeClass("current");
			})
		console.log(ulW)
		
		})                 