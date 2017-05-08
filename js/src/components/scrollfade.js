var scrollfade = (function ($) {

	var scrollConfig = {
		scale: 1,
		origin: 'bottom',
        afterReveal: function (domEl) {
            $(domEl).addClass('scrollreveal--shown');
        }
	}

    var init = function() {
    	window.sr = ScrollReveal(scrollConfig);
        sr.reveal('.scrollreveal');
    };

    return {
        init: init
    };

})(jQuery); 
