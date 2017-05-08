var scrollfade = (function ($) {

	var scrollConfig = {
		scale: 1,
		origin: 'bottom',
		duration: 1000
	}

    var init = function() {
    	window.sr = ScrollReveal(scrollConfig);
        sr.reveal('.scrollreveal', 50);
    };

    return {
        init: init
    };

})(jQuery); 
