

var host="http://dr.promontory7.cn/DrAgriculture-0.1";
$(function(){
		$(".new-address-table input").blur(function(){
			if($(this).is("#cellphone")){ 		
				var reg = /^1[3|4|5|7|8][0-9]\d{8}$/; 
				var $cellphone = $("#cellphone").val(); 
				if(!reg.test($cellphone)){ 
					$(this).next().text("*手机号码格式错误");
				}
				else{
					$(this).next().text("");
					$(this).next().append("<img style='width: 18px;' src='img/勾 (1).png' />");
				} 
			}
		})
	})
	
$(function(){
	
})
//新增收货地址
$(function(){
	
	$("#save-btn").click(function(){
		saveaAdd();
	})
	$("#save-btn").keydown(function(e){
		if(e.keyCode==13){
			saveaAdd();
		}	
	})
})
function saveaAdd(){
	var sendData={
		fullName:$("#fullName").val(),
		province:$("#s_province").val(),
		city:$("#s_city").val(),
		district:$("#s_county").val(),
		address:$("#address").val(),
		mobile:$("#cellphone").val(),
		email:$("#inputMail").val(),
		phone:$("#telephone").val(),
	
	};
	$.ajax({
		type:"post",
		dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(sendData),
		url:host+"/terminal/shipping/add",
		beforeSend:function(){
			$("#save-btn").prop("disabled",true);
			$("#save-btn").text("正在保存...");
		},
		success:function(json){
			
				alert(json.message);
			
		},
		error:function(){
			alert("交互异常");
		},
		complete:function(){
			$("#save-save").prop("disabled",false);
			$("#save-save").text("保存");
		}
	});
}


//获得当前用户默认地址
$(function(){
	$.ajax({
		url:host+"/terminal/shipping/getDefault",
		success:function(json){
			if(json.staus==200){
				if(json.code==2000){
					var $defaultAddress=$('<div class="default-address">'+
			    				'<div class="default-address-head">'+
			    					'<span style="margin-left: 38px;">杜拉拉</span>'+
			    					'<span >广东省</span>'+
			    					'<span >51000</span>'+
			    					'<span>'+
			    						'<button onclick="$(\'#editAddressModal\').toggle();$(\'.bg-grey\').show()">编辑</button>|'+
			    						'<button onclick="$(\'#cancerOrderModal\').toggle();$(\'.bg-grey\').show()">删除</button>'+
			    					'</span>'+
			    				'</div>'+
			    				'<div class="default-address-contain">'+
			    					'<table>'+
			    						'<tr>'+
			    							'<td>收货人：</td><td>杜拉拉</td>'+
			    						'</tr>'+
			    						'<tr>'+
			    							'<td>所在地区：</td>'+
			    							'<td><span>广东省</span>'+
			    								'<span>广州市</span>'+
			    								'<span>海珠区</span>'+
			    							'</td>'+
			    						'</tr>'+
			    						'<tr>'+
			    							'<td>地址：</td><td>钟落潭镇光新路388号</td>'+
			    						'</tr>'+
			    						'<tr>'+
			    							'<td>手机：</td><td>15566609090</td>'+
			    						'</tr>'+
			    						'<tr>'+
			    							'<td>固话：</td><td>0768-2626215</td>'+
			    						'</tr>'+
			    					'</table>'+
			    				'</div>'+
			    				'<button onclick="$(this).next().show()&&$(this).hide()" class="default-reset">设为默认地址</button>'+
			    				'<div class="default-address-footer" style="display: none;">'+
			    					'<img style="float: right;margin-top: -17px;" src="img/默认.png">'+
			    				'</div>'+
			    			'</div>');
					$('.old-address').append($defaultAddress);
				}else{
					alert(json.message);
				}
			}
		},
		error:function(){
			alert("交互异常");
		}
	});
})
