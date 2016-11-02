$(function(){
	var input1=$(".top1 input");
	var input2=$(".top2 input");
	var input3=$(".top3 input");
	var input4=$(".top4 input");
	var add1=$(".tianjia1");
	var add2=$(".tianjia2");
	var add3=$(".tianjia3");
	var add4=$(".tianjia4");
	var ul=$(".shijian");
	var todos=[];
	
	var d = new Date(new Date().getTime());
//alert(d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
    var s=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
	
	
	
	
	
	if(localStorage.todos){
		todos=JSON.parse(localStorage.todos);
		for(var i=0;i<todos.length;i++){
			var c=(todos[i].state)?'don':'ton';
			$("<li class="+c+"><div class='con'>"+todos[i].name+"</div><div class='son'>删除</div></li>").appendTo('ul');
		}
	}
	$('.tianjia1').on('touchend',function(){
		var v1=$.trim(input1.val());
		var todo1={
			name:v1,
			state:0
		};
		input1.val('');
		todos.push(todo1);
		localStorage.todos=JSON.stringify(todos);
		var c=(todo1.state)?'don':'ton';
		$('<li class='+c+'><div class="con">'+todo1.name+'</div><div class="son">删除</div></li>').appendTo('ul');
		$('.top').css('display','none')
	});
	add2.on('touchend',function(){
		var v2=$.trim(input2.val());
		var todo2={
			name:v2,
			state:0
		};
		input2.val('');
		todos.push(todo2);
		localStorage.todos=JSON.stringify(todos);
		var c=(todo2.state)?'don':'ton';
		$('<li class='+c+'><div class="con">'+todo2.name+'</div><div class="son">删除</div></li>').appendTo('ul');
		$('.top').css('display','none')
	});
	add3.on('touchend',function(){
		var v3=$.trim(input3.val());
		var todo3={
			name:v3,
			state:0
		};
		input3.val('');
		todos.push(todo3);
		localStorage.todos=JSON.stringify(todos);
		var c=(todo3.state)?'don':'ton';
		$('<li class='+c+'><div class="con">'+todo3.name+'</div><div class="son">删除</div></li>').appendTo('ul');
		$('.top').css('display','none')
	});
	add4.on('touchend',function(){
		var v4=$.trim(input4.val());
		var todo4={
			name:v4,
			state:0
		};
		input4.val('');
		todos.push(todo4);
		localStorage.todos=JSON.stringify(todos);
		var c=(todo4.state)?'don':'ton';
		$('<li class='+c+'><div class="con">'+todo4.name+'</div><div class="son">删除</div></li>').appendTo('ul');
		$('.top').css('display','none')
	})
	
	var starpos;
	$('ul').on('touchstart','li',function(e){
		starpos=e.originalEvent.changedTouches[0].clientX;
	});
	$('ul').on('touchend','li',function(e){
		var p=e.originalEvent.changedTouches[0].clientX;
		var index=$(this).index();
		if(p-starpos>50){
			$(this).removeClass('ton').addClass('don');
			todos[$(this).index()].state=1;
			localStorage.todos=JSON.stringify(todos);
			$(".son").eq(index).addClass('sans').css({width:'1.2rem'}).end().addClass('ss')
		}
		if(p-starpos<-50){
			$(this).removeClass('don').addClass('ton');
			todos[$(this).index()].state=0;
			localStorage.todos=JSON.stringify(todos);
		}
	})
	
	var foo=$('.foo');
	var fooq=$('.foo-q');
	var foow=$('.foo-w');
	var fooy=$('.foo-y');
	fooq.on('touchend',function(){
		$('.foo div').removeClass('acc');
		$('.foo-q').addClass('acc')
		$('ul>li').show();
	})
	foow.on('touchend',function(){
		$('.foo div').removeClass('acc');
		$('.foo-w').addClass('acc')
		$('ul>li').show();
		$('.don').hide();
	})
	fooy.on('touchend',function(){
		$('.foo div').removeClass('acc');
		$('.foo-y').addClass('acc')
		$('ul>li').show();
		$('.ton').hide();
	})
	
	$('ul').on("touchend",".son",function(){
		todos=JSON.parse(localStorage.todos);
		var sc=$(this).closest('li');
		var index=sc.index();
		todos.splice(index,1);
		localStorage.todos=JSON.stringify(todos);
		sc.addClass('sons');
		sc.delay(800).queue(function(){
			$(this).remove().dequeue();
		})
	})
	
	var qc=$(".qc");
    qc.on("touchend",function(){
    	 	$(".don").each(function(i){
    	 		var son=$(this).closest('.son');
		 		$(this).delay(i*150).queue(function(){
					$(this).addClass('sons').dequeue();
				}).delay(1000).queue(function(){
					$(this).remove().dequeue();
				})	
	    	 })
    	 	var newarr=[];
    	 	for(var i=0; i<todos.length; i++){
    	 		if(todos[i].state===0){
    	 			newarr.push(todos[i]);
    	 		}
    	 	}
    	 	todos=newarr;
    	 	localStorage.todos=JSON.stringify(todos);
    })
    
    $('.tj').on('touchend',function(){
		$('.xuanze').css('display','block');
	});
	$('.quxiao').on('touchend',function(){
		$('.xuanze').css('display','none');
	});
	
	$('.xuanze1').on('touchend',function(){
		$('.top1').css('display','block')
		$('.xuanze').css('display','none')
	})
	$('.xuanze2').on('touchend',function(){
		$('.top2').css('display','block')
		$('.xuanze').css('display','none')
	})
	$('.xuanze3').on('touchend',function(){
		$('.top3').css('display','block')
		$('.xuanze').css('display','none')
	})
	$('.xuanze4').on('touchend',function(){
		$('.top4').css('display','block')
		$('.xuanze').css('display','none')
	})
	$('.qx').on('touchend',function(){
		$('.top').css('display','none')
	})
	
	$('.cd').on('touchend',function(){
		$('.mbx').css('display','block')
	});
	$('.fh').on('touchend',function(){
		$('.mbx').css('display','none')
	})
	
	
	
	
})
