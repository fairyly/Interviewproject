;$.fn.extend({
  fadeBanner:function(btnLeft, btnRight,speed){
    var _ul =$(this).find('ul'),
        _li=_ul.find('li'),
        _liLen=_ul.find('li').length,
        _index=0,
        animateTime=speed ? speed*1000 : 3000;
    var ol=$("<ol></ol>").appendTo($(this));
    for (var i = 0; i < _liLen; i++) {
       $("<li class='transition'></li>").appendTo(ol);
    };
    var oLi=ol.children('li');
        //切换的动画
        var _animate=function(clickIndex){
            if(clickIndex!=undefined){
                _index=clickIndex
            }
            //动画执行
            if(_index<_liLen && _index>=0){
                _li.eq(_index).animate({
                    opacity:1
                },500).siblings().animate({
                    opacity:0
                },300);
                _changeIcon(_index);
                _index++;
                //索引值是否超过元素个数
               
            }
        },
        //轮播导航样式改变
        _changeIcon=function(iconIndex){
            oLi.eq(iconIndex).addClass('cur').siblings().removeClass('cur');
        };
        //点击轮播导航时出发
        oLi.click(function(){
            _animate($(this).index());
        });
        _animate();
        //定时器
        fadeInterval=setInterval(function(){
            _animate();
        },animateTime);
        //左边按钮
    		btnLeft&&btnLeft.click(function(){
    			 _index--;
	       if( _index<=0){
	     	 _index=2
	     }else{
	     	 _index--;
	     }
	     _animate();
	    });
	    //右边按钮
	    btnRight&&btnRight.click(function(){
	    	 if(_index>=_liLen){
                    _index=0;
                }
	     _animate();
	      
	    });
        //当鼠标悬浮在上面时或鼠标离开时
        $(this).mouseenter(function(){
            clearInterval(fadeInterval);
        }).mouseleave(function(){
            fadeInterval=setInterval(function(){
                _animate();
            },animateTime);
        })
    
  }
});

