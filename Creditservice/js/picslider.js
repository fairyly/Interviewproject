;$.fn.extend({
  banner:function(btnLeft, btnRight, speed){
    var _ul =$(this).find('ul'),
        _li=_ul.find('li'),
        _liLen=_ul.find('li').length,
        _index=0,
        animateTime=speed ? speed*1000 : 3000,
        _btnL=btnLeft,
        _btnR=btnRight;
        //复制ul里面的li
        _li.first().clone().appendTo(_ul);
    var _liWidth =_li.width();
    var ol=$("<ol></ol>").appendTo($(this));
    for (var i = 0; i < _liLen; i++) {
       $("<li class='transition'></li>").appendTo(ol);
    };
    var oLi=ol.children('li');
    oLi.first().addClass('cur');
    //设置ul宽度
    _ul.width(_liWidth*(_liLen+1));
    var leftGo=function(){
         if(_index==0){
            _index = _liLen;
            _ul.stop().css('marginLeft',-_index*_liWidth);
          };
          _index--;
          _ul.stop().animate({marginLeft:-_index*_liWidth});
          changeIcon(_index);
    },
    rightGo=function(clickIndex){
            if(clickIndex != undefined){
              _index=clickIndex-1;
            };
            if(_index==_liLen){
              _index = 0;
              _ul.stop().css('marginLeft','0');
            };
           _index++;
           _ul.stop().animate({marginLeft:-_index*_liWidth});
           _index==_liLen?changeIcon(0):changeIcon(_index);
    },
    autoMove=function(){
            bannerInterval = setInterval(function(){
              rightGo();
            },animateTime);
    },
    changeIcon=function(iconIndex){
        oLi.eq(iconIndex).addClass('cur').siblings().removeClass('cur');
    }
    //左边按钮
    _btnL&&_btnL.click(function(){
      leftGo();
    });
    oLi.click(function(){
      rightGo($(this).index());
    })
    //右边按钮
    _btnR&&_btnR.click(function(){
       rightGo();
    });
    autoMove();
    $(this).mouseenter(function() {
        clearInterval(bannerInterval);
    }).mouseleave(function() {
        autoMove();
    });
    
  }
});
//调用    
$('div.banner-item').banner($('div.ll'),$('div.rr'),4)
