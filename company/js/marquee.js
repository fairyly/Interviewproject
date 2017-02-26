//实现无缝滚动效果
window.onload=function(){
		var tab=document.getElementById("demo");
		var tab1=document.getElementById("demo1");
		var tab2=document.getElementById("demo2");

		tab2.innerHTML=tab1.innerHTML;

		function gun(){
			if (tab2.offsetWidth-tab.scrollLeft<=0) {
				tab.scrollLeft-=tab2.offsetWidth;//tab2.offsetWidth:tab2的实际宽度,当tab.scrollLeft等于tab2.offsetWidth的时候说明tab1已经全部滚完了，于是回归原点,这里写成tab.scrollLeft=0应该也是一样的正常情况下tab2跟tab1是完全一样的
			}else{
				tab.scrollLeft++;//否则tab里的内容一直向左滚动
			     }
		}
		var mytime=window.setInterval(gun,10);//或者可以这样写window.setInterval("gun()",10);
		tab.onmouseover = function() {
		    clearInterval(mytime)
		   }
		tab.onmouseout = function() {
		    mytime = setInterval(gun, 10)
		   }
}