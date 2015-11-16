$(function(){
	$socialEffect = $(".social-tab ul li"),
	$menuTrigger = $(".top-bar div"),
	$menuClose = $(".menu-display div"),
	$menu = $(".menu-display");

	$(".social-tab-footer").toggleClass("hide");
	if (matchMedia) {
		var mq = window.matchMedia( "(max-width: 768px)" );
		mq.addListener(WidthChange);
		WidthChange(mq);
	}
	function WidthChange(mq) {
		if (mq.matches) {
			$(".social-tab").toggleClass("hide");
	    	$(".social-tab-footer").toggleClass("hide");
		}
	}
	$socialEffect.hover(function(){
		$(this).animate({
	      "margin-left": "10px"
	    }, 200);
	}, function(){
		$(this).animate({
	      "margin-left": "0"
	    }, 200);
	});
    $menuTrigger.on("click", function(){
    	$menu.slideDown("slow");
    });
    $menuClose.on("click", function(){
    	$menu.slideUp("slow");
    });
});