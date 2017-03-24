$(document).ready(function(){

  //图片验证码
  function createCode(){    
    var code = "";
    var codeLength = 4;   
    var checkCode = $(".pic_code");   
    var selectChar = new Array(0,1,2,3,4,5,6,7,8,9); 
    for(var i=0;i<codeLength;i++){   
      var charIndex = Math.floor(Math.random()*10);   
      code +=selectChar[charIndex];   
    }   
    if(checkCode){      
      checkCode.html(code) ;
    }   
  }
  createCode();
 
 
  //点击验证码后更换验证码
  $(".pic_code").click(function(){
    createCode();
  })
  //验证验证码

    function telCode() {
       var validCode = true;
       $(".tel_code").click(function() {
         var time = 30;
         var codes = $(this);
         if (validCode) {
          validCode = false ;
          codes.addClass('tel_code1');     
         var t = setInterval(function(){
           time--;
           codes.html(time+"秒");
           if(time==0){
            clearInterval(t);
            codes.html("重新获取");
            validCode = true ;
            codes.removeClass('tel_code1');
           }
         },1000)
         }
       })
    }
    telCode();
   
})



   $(function () {
    
    //注册验证
    $(".register_table input").blur(function(){
      //用户名验证
          if($(this).is("#name")){
            if(!/^[a-zA-Z0-9_\-$]{6,20}$/.test(this.value)){
              $(this).next().text("*请输入正确的用户名");
            }
            else{
              $(this).next().text('').end().next().append("<img style='width: 18px;' src='img/勾 (1).png' />");        
            } 
          }
      //手机号码验证
          if($(this).is("#cellphone")){     
            if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.value)){ 
              $(this).next().text("*请输入正确的手机号码");
            }
            else{
              $(this).next().text('').end().next().append("<img style='width: 18px;' src='img/勾 (1).png' />");   
            } 
          }
        //密码验证
         if($(this).is("#password")){
            if(!/^[a-zA-Z0-9_\-$]{6,18}$/.test(this.value)){
              $(this).next().text("*密码格式错误");
            }
            else{
              $(this).next().text('').end().next().append("<img style='width: 18px;' src='img/勾 (1).png' />");   
            }
         }
         //确认密码验证
         if ($('#repassword').val() != "") {
           if ($('#repassword').val() != $('#password').val()) {
               $('#repassword').next().text('*输入的密码不匹配');  
           }
           else {
              $('#repassword').next().text('').end().next().append("<img style='width: 18px;' src='img/勾 (1).png' />");   
           }
         }   
    })
  })


