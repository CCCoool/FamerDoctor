$(window).ready(function(){
	//主页焦点图
	var btnLeft = $('.banner-btnLeft');
	var btnRight = $('.banner-btnRight');
	var aLi = $('.main_banner>ul>li');
	var ul = $('.main_banner>ul');
	var iNow = 0;

    //遍历添加ol>li的数量
	for(var i=0;i<aLi.length;i++){
		$('.main_banner>ol').append("<li></li>");
	}
    $('.main_banner>ol>li').eq(0).addClass("current");

    //点击左按钮 
    btnLeft.click(function(){
         iNow--;
          // 判断回流
         if(iNow<0){
              iNow=aLi.length-1;
         }
         aLi.eq(iNow).siblings().stop().animate({
          opacity:0
         
        },2000);
        aLi.eq(iNow).stop().animate({
          opacity:1
           
        },2000);
         $('.main_banner>ol>li').eq(iNow).addClass('current').siblings().removeClass('current');
     });

    // 点击右按钮 
       btnRight.click(function(){
         iNow++;
         if(iNow>aLi.length-1){
              iNow=0;
         }
         aLi.eq(iNow).siblings().stop().animate({
          opacity:0
         
        },2000);
        aLi.eq(iNow).stop().animate({
          opacity:1
           
        },2000);
         $('.main_banner>ol>li').eq(iNow).addClass('current').siblings().removeClass('current');

     });

     //手动切换
     $('.main_banner>ol>li').mouseover(function(){
		var n = $(this).index();
//        var iNow = $(this).index();
//        alert(iNow);
		iNow = n;
         aLi.eq(iNow).siblings().stop().animate({
          opacity:0
         
        },2000);
        aLi.eq(iNow).stop().animate({
          opacity:1
           
        },2000);
         $('.main_banner>ol>li').eq(iNow).addClass('current').siblings().removeClass('current');

     });
  // 封装函数体
 function move1(){
      aLi.eq(iNow).siblings().stop().animate({
          opacity:0
         
        },800);
        aLi.eq(iNow).stop().animate({
          opacity:1
        },2000);
      
         $('.main_banner>ol>li').eq(iNow).addClass('current').siblings().removeClass('current');
 }
 
 // 定个定时器的初始值

function run2(){ 
      iNow++;
       if(iNow>aLi.length-1){
              iNow=0;
         }
       move1();  
}
 
// 定时器
 timer = setInterval(run2,2000);	
  
 

//当鼠标划入，停止轮播图切换
  $(".main_banner").hover(function(){
    clearInterval(timer);
    btnLeft.removeClass("common");
    btnRight.removeClass("common");

 },function(){
    timer = setInterval(run2,2000);
    btnLeft.addClass("common");
    btnRight.addClass("common");
 })

})


