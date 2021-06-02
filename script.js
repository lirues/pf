

 $(function(){

 	var n = 0;
 	var lpath = "";

 		$(".slide_page > ul > li").eq(n).addClass("slide_sel");
 		$(".slide_page a").on("click",function(e){
 			e.preventDefault();


 			lpath = $(this).attr("href");

 			$(".slide_img > img").attr({src:lpath});
 			$(".slide_img > img").css({"opacity":"0"}).stop().animate({"opacity":"1"}, 1000);

 			$(".slide_page > ul > li").removeClass("slide_sel");
 			
 			


 		});


 		$(".slide_page ul li:first").on("click",function(e){

 			$(".slide_txt > h1").text("내가 만드는 집");
 			$(".slide_txt > span").text("나만을 위한 또다른 보금자리");
 			$(this).addClass("slide_sel");


 		});

 		$(".slide_page ul li:eq(1)").on("click",function(e){

 			$(".slide_txt > h1").text("귀여운 비누 만들기");
 			$(".slide_txt > span").text("수제비누로 몸도 마음도 깨끗하게");
 			$(this).addClass("slide_sel");



 		});

 		$(".slide_page ul li:eq(2)").on("click",function(e){

 			$(".slide_txt > h1").text("조금 색다른 십자수");
 			$(".slide_txt > span").text("입체적인 십자수의 아름다움");
 			$(this).addClass("slide_sel");


 		});

 		$(".slide_page ul li:eq(3)").on("click",function(e){

 			$(".slide_txt > h1").text("아기자기 과자집");
 			$(".slide_txt > span").text("어릴적 꿈꿨던 달콤한 집");
 			$(this).addClass("slide_sel");


 		});



 		$(".slide_page ul li:last").on("click",function(e){

 			$(".slide_txt > h1").text("손뜨개인형의 세계");
 			$(".slide_txt > span").text("앙증맞은 친구들을 우리집에 모아보자");
 			$(this).addClass("slide_sel");


 		});


 		


 		// $("#content ul li").eq(n).on("hover", function(){

 		// 	$("#content ul li > div").eq(n).css({"opacity":"0"});

 		// });











 });