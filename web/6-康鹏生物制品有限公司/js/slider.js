// JavaScript Document
$(document).ready(function(){
		var bool = true;
		var liLen = $(".box ul li").length;
		var liW = $(".box ul li").outerWidth(true);
		for(i=0;i<liLen;i++){
			$(".box ul li").eq(i).css({"left":i*liW + "px"})
			}
		function show(){
			if(bool){
				bool = false;
				if(liLen>4){
					$(".box ul li").eq(0).animate({"left":-liW + "px"},function(){
						$(".box ul li").eq(0).css({"left":(liLen-1)*liW + "px"}).appendTo(".box ul");
						bool = true;
						})
						
					for(i=1;i<liLen;i++){
						$(".box ul li").eq(i).animate({"left":(i-1)*liW + "px"},function(){
							bool = true;
							})
						}
					}
				}
			}
			
		var lun = setInterval(function(){
			show();
			},2000)
			
		$(".box").mouseover(function(){
			clearInterval(lun)
			})
			
		$(".box").mouseout(function(){
			lun = setInterval(function(){
				show();
				},2000)
			})
			
		$(".next").click(function(){
			show();
			})
			
		$(".prev").click(function(){
			if(bool){
				bool = false;
				if(liLen>4){
					
					for(i=0;i<liLen-1;i++){
						$(".box ul li").eq(i).animate({"left":(i+1)*liW + "px"},function(){
							bool = true;
							})
						}
					$(".box ul li").eq(liLen-1).prependTo(".box ul").css({"left":-liW + "px"}).animate({"left":0 + "px"},function(){bool=true;})
					
				}
				}
			})
		console.log(liW)
		})