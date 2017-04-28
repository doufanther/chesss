

	
	//轮播
	$(function(){
			
			//轮播
			// 1.鼠标移入盒子按钮显隐,清除和添加定时器
			$(".carousel").hover(function(){
				$(".usel").css({display:"block"});
				clearInterval(timer);
			},function(){
				$(".usel").css({display:"none"});
				timer = setInterval(run,3000);
			});
		
		    // 2.自动轮播
		    var num = 0;
		    //后台的图片总数要减1  比如4张图片要写3 
		    var count = 3;
		    //当前方向 默认向右
		    var direction = 'right';
		    // 函数体
		    function run(){
		    	//往右边
		    	if(num <  count && direction == 'right'){
		          
		    		++num;
		    		if(num == count) direction = 'left';
		    		abc(num);
		    		
		    	
		    	}else if(num >  0 && direction =='left'){
		
		    		--num;
		    		if(num == 0)direction = 'right';
		    		abc(num);
		
		    	}
		    	
		    }
		    // 定时器
		    timer = setInterval(run,3000);
		
		    function abc(num){
		    	var l = num * -246;
		    	// 赋值给元素 x
		    	$("#big").animate({left:l+"px"},1500);
		    }
		
		    // 4.左点击
		    $(".usel .lt").click(function(){

		    	if(num >  0 && direction =='left'){

			    	 num--;
			    	 if(num==0){
			    	 	direction = 'right';
			    	 }
			    	 abc(num);
		    	}
		    })

		    // 5.右点击
		    $(".usel .gt").click(function(){
		    	if(num <  count && direction == 'right'){

			    	 ++num;
			    	 if(num==count){
			    	 	direction= 'left';
			    	 }
			    	 abc(num);
		    	}
		   
		    })
		
	})
	
	
	
			//评论 给你参考的
		// $('#eval').click(function(){

		// 	//还有个是哪个用户评论的。 
		// 	//记录当前用户mid   
		// 	//还是游客评论的，
		// 	//一般游客是没有评论的
		// 	var content = $('#content').val();
		// 	var uid   =  '' //后台放的uid 记录当是谁登录的
		// 	//如果内容存在
		// 	if(content){
		// 		 //这里是提交到后台去，异步请求，这个是jquery 的异步  ?=>填写请求的路径url
		// 		 $.post('?',{content:content,uid:uid},function(res){

		// 		 	 //如果插入成功
		// 		 	 if(res.status == 1){
		// 		 	 	//执行插入成功的代码
		// 		 	 	//1.拼接html代码
		// 		 	 	//2.后台返回的数据，组装成回复内容的html 代码 
		// 		 	 	//3.追加到那个评论类里面

		// 		 	 }
		// 		 })
		// 	}
		// })
		// 
		
	$(function(){	
		 $('#eval').click(function(){

		 	 	var content = $('#content').val();

		 	 	if(content){
		 	 		//拼接html
		 	 		var html = '';

		 	 		html+= '<div class="response">';
					html+= '<div class="ponse-img fl">';
					html+= '<a href=""><img src="../img/bg1.png"/></a>';
					html+= '</div>';
					html+= '<div class="ponse-tet fl">';
					html+= '<div class="ponse-user"><a href="">万象中国</a><span>36分钟前</span></div>';
					html+= '<p>'+content+'</p>'
					html+= '<div class="write-back fr">';
					html+= '<span>回复</span>';
					html+= '<span><i></i>2</span>';
					html+= '</div>';
					html+= '</div>';
					html+= '</div>';

					$('#reply').after(html);

		 	 	}
		 })
	});
	



