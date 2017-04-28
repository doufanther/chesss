//登录
	$(function(){
		var phone  = /^(13[0-9]{9})|(14[0-9])|(18[0-9])|(15[0-9][0-9]{8})|(17[0-9]{9})|(147[0-9]{8})$/;
		//个人团体 登录
		$('.group span').click(function(){
			
			var index = $(this).data('index');
			$(this).addClass('ctive').siblings().removeClass('ctive');
			$('#type').val(index);
			
		})
		//表单提交事件
		$('#submit').click(function(){
			
			var account =  $('#account').val();
			var pass    =  $('#pass').val();
			//区分是个人登录  换是团体登录
			var type    =  $('#type').val();
			
			if(account.match(phone)== null){
				layer.msg('你输入不是手机号，请输入正确的手机号');
				$('#account').val(' ');
				$('#account').focus();
			}
			
			if(!pass){
				layer.msg('请输入密码');
				$('#pass').val(' ');
				$('#pass').focus();
			}
			
			//表单提交
			$.post('__ACTION__',{account:account,pass:pass,type:type},function(res){
				if(res.status == 1 ){
					window.location.reload(); //刷新当前页面
				}
			});
		});			
	});
	
//登录适配
$(function(){
	$(function(){setTimeout(onWidthChange,1000);});
 
			function onWidthChange(){
						
				var s = $(window).width();
				if(s <= 1920 && s > 1820){
					abc('294px');
				}else if(s <= 1820 && s > 1680){
					abc('230px');
				}else if(s <= 1680 && s > 1600){
					abc('176px');
				}else if(s <=1600 && s > 1480){
					abc('135px');			
				}else if(s <= 1480 && s > 1400){
					abc('56px');
				}else if(s <=1400){
					abc('0px');
				}			 			    
				    setTimeout(onWidthChange,1000);
				}
			function abc(x){
				
				$('.register-bar').css({'right':x});
			}
});