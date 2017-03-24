	$(function(){
	//设置选项卡
	        $(".btn>li").click(function () {
	           // alert($(this).index());
	            var elem=$("#main"+$(this).index());
	            elem.css("display","block");
	            $(this).css({backgroundColor:"#EF6E09",color:"#fff",borderColor:"#EF6E09"});
				$(this).siblings().css({backgroundColor:"#fff",color:"#000",borderColor:"#e5e5e5"});
	            elem.siblings().hide();
	        })
	//查看物流	
			$(".checkLogistics-btn").bind('click',function(){
				$(".order").hide();
				$(".logistics-info").show();
			});
			$("#reture").bind('click',function(){
				$(".order").show();
				$(".logistics-info").hide();
			})
	})
	

$(function(){
	//所有订单全选、全不选、取消全选
	$("#checkedAll").click(function(){
		this.checked?$("#main0 input").prop('checked',true):$("#main0 input").prop('checked',false);
	});
	var chks = $(".main0Div input");
	chks.click(function(){
		for (var i=0;i<chks.length;i++) {
			if(!$(chks[i]).is(':checked')){				
				$("#checkedAll").attr('checked',false);
			}			
		}
	});

	 $("#main1checkall").click(function(){
	 	this.checked?$("#main1 input").prop('checked',true):$("#main1 input").prop('checked',false);
	 })
	var chks1 = $(".main1Div input");
	chks1.click(function(){
		for (var i=0;i<chks1.length;i++) {
			if(!$(chks1[i]).is(':checked')){				
				$("#main1checkall").attr('checked',false);
			}			
		}
	});
	 $("#main2checkall").click(function(){
	 	this.checked?$("#main2 input").prop('checked',true):$("#main2 input").prop('checked',false);
	 })
	 var chks2 = $(".main2Div input");
	chks2.click(function(){
		for (var i=0;i<chks2.length;i++) {
			if(!$(chks2[i]).is(':checked')){				
				$("#main2checkall").attr('checked',false);
			}			
		}
	});
	 $("#main3checkall").click(function(){
	 	this.checked?$("#main3 input").prop('checked',true):$("#main3 input").prop('checked',false);
	 })
	 var chks3 = $(".main3Div input");
	 chks3.click(function(){
		for (var i=0;i<chks3.length;i++) {
			if(!$(chks3[i]).is(':checked')){				
				$("#main3checkall").attr('checked',false);
			}			
		}
	});
	//每个订单全选全不选
	$(".ch").click(function(){
		$input=$(this).parent().parent().parent().children().find("input");
		this.checked?$input.prop('checked',true):$input.prop('checked',false);	  			 	
	})
	
})
