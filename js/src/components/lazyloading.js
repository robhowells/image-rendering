var lazyloading = (function ($) {

    var init = function() {

    	window.lazySizesConfig = window.lazySizesConfig || {};
		window.lazySizesConfig.loadedClass = 'image__element--loaded';

    };

    return {
        init: init
    };

})(jQuery); 
