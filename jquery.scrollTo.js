/* --
http://github.com/rodi01/simpleScrollTo
Simple ScrollTo for jQuery.
Written by Rodrigo Soares (oncemade{at}gmail.com) Jul 2010.

Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and
MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses.
Please attribute the author if you use it.
-- */

;(function($) {
//Scroll page to an element
$.fn.scrollTo = function(options) {
	var opts = $.extend({}, $.fn.scrollTo.defaults, options);

	return this.each(function() {
		var $this = $(this),
			whereTo = $this.attr('href'),
			destination = $(whereTo).offset().top;
		$this.click(function() {
			$('html:not(:animated),body:not(:animated)').animate({scrollTop: destination-opts.offsetBy}, opts.speed );
			return false;
		});
	});
};

// default options
$.fn.scrollTo.defaults = {
	speed: 500,
	offsetBy: 20
};

})(jQuery);