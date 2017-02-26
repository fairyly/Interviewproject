(function($){
	$(function(){
		if($("#banner").length){
			//$('#banner').banner('','',4)
			$('#banner').fadeBanner($("a.btn-l"),$("a.btn-r"),3);
		}
		$("div.box-nav-top ul li,div.tab-title ul li").click(function(){
			$(this).addClass("cur").siblings("li").removeClass("cur");
			$("div.tab-box").eq($(this).index()).show().siblings("div.tab-box").hide();
		});
		$("div.tab-box ul li").click(function(){
			$(this).addClass("cur").siblings("li").removeClass("cur");
		});
	});
})(jQuery)
