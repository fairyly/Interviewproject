//实现在线咨询随滚动条浮动效果


function zixun(){
	var qq1=document.getElementById("zixunbox");
	qq1.style.top=document.documentElement.scrollTop+document.body.scrollTop+200+"px";
	//这里有浏览器兼容问题 qq1.style.top=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
   
}
window.onscroll=zixun;