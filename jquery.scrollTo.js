;(function($) {
//Scroll page to an element
$.fn.scrollTo = function(options) {
	var opts = $.extend({}, $.fn.scrollTo.defaults, options);

	return this.each(function() {
		var $this = $(this),
			destination = $this.offset().top;
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination-opts.offsetBy}, opts.speed );
	});
};

// default options
$.fn.scrollTo.defaults = {
	speed: 500,
	offsetBy: 20
};

})(jQuery);