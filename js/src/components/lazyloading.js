var lazyloading = (function ($) {

    var init = function() {
        new LazyLoad ({
			elements_selector: ".lazyload__element",
			threshold: 0,
			callback_load: function(element) {
				$(element).closest('.lazyload').addClass('loaded');
			}
		});
    };

    return {
        init: init
    };

})(jQuery); 
