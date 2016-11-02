$(function(){
	var input=$(".top input");
	var add=$(".tianjia");
	var ul=$(".shijian");
	var v=$.trim(input.val());
	var todos=[];
	
	if(localStorage.todos){
		todos=JSON.parse(localStorage.todos);
		for(var i=0;i<todos.length;i++){
			var c=(todos[i].state)?'don':'ton';
			$("<li class="+c+"><div class='con'>"+todos[i].name+"<div class='son'>删除</li>").appendTo('ul');
		}
	}
	add.on('touchend',function(){
		v=$.trim(input.val());
		var todo={
			name:v,
			state:0
		};
		input.val('');
		todos.push(todo);
		localStorage.todos=JSON.stringify(todos);
		var c=(todo.state)?'don':'ton';
		$('<li class='+c+'><div class="con">'+todo.name+'</div><div class="son">删除</div></li>').appendTo('ul');
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
    	$('.top').css('display','block')
    });
    $('.qx').on('touchend',function(){
    	$('.top').css('display','none')
    })
})
