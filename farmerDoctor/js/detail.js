var host = 'http://dr.promontory7.cn/DrAgriculture-0.1/';
$(function(){
	// var $glcode = JSON.parse(window.localStorage.$glcode);
	detail();
});
function detail(code){
	var sd = {
		code:code
	};
	$.ajax({
		type:'post',
		url:host+'terminal/goods/details',
		async:true,
		data:sd,
		dataType: "json",
	          contentType: "application/json",
	          data: JSON.stringify(sd),

		success:function(data){
			if(data.status == 200 && data.code == 2000){

				var $BigImg = $("<img src='"+data.defaultImage+"' alt=''>");
				$('#pro_img dl dt').append($BigImg);
				for (var $i = 0; $i < $('#pro_img dl dd li').length; $i++) {
					if(data.imageList.length == 1){
						$('#pro_img dl dd li').ea($i).append($("<img src='"+data.imageList+"' alt=''>"));
					}else{
						$('#pro_img dl dd li').append($("<img src='"+data.imageList[$i]+"' alt=''>"));
					}
					// $('#pro_img dl dd li').ea($i).append()
				};
				$('.tit p').html(data.title);
				$('.postfee').html(data.postFee);
				$('.sales').html(data.sales);
				$('#selected span span').html(data.price);
				$('.stock span').html(data.stock);
			}
		},
		error:function(){
			alert('交互异常');
			// if(){
				//console.log(data.message);
				var $BigImg = $("<img src='"+data.defaultImage+"' alt=''>");
				$('#pro_img dl dt').append($BigImg);
				for (var $i = 0; $i < $('#pro_img dl dd li').length; $i++) {
					if(data.imageList.length == 1){
						$('#pro_img dl dd li').ea($i).append($("<img src='"+data.imageList+"' alt=''>"));
					}else{
						$('#pro_img dl dd li').append($("<img src='"+data.imageList[$i]+"' alt=''>"));
					}
					$('#pro_img dl dd li').ea($i).append()
				};
				$('.tit p').html(data.title);
				$('.postfee').html(data.postFee);
				$('.sales').html(data.sales);
				$('#selected span span').html(data.price);
				$('.stock span').html(data.stock);
			// }
		}
	})
}

$(function(){
	function low($v,$elem) {
		if($v > 1){
			$v--;
			$elem.val($v);
		}
	}
	function add($v,$n,$elem){
		if($v >= $n){
			$v == $n;
		}else{
			$v++;
		}
		$elem.val($v);
	}
	
	var $n1 = $('.stock span').html();
	$('.low1').bind('click',function(){
		var $v1 = $('#add input').val();
		low($v1,$('#add input'));
	})
	$('.add1').bind('click',function(){
		var $v1 = $('#add input').val();
		add($v1,$n1,$('#add input'));
	});

	$('.balance').click(function(){
		window.location.href='car.html';
	});

	$('.continue').click(function(){
		window.location.href='mall.html';
	});
})