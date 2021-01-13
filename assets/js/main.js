/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:    [ '1281px',  '1680px' ],
			normal:  [ '1001px',  '1280px' ],
			narrow:  [ '737px',   '1000px' ],
			mobile:  [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Add textareas on page load.
		$window.on('load', function() {
			$('.written').each( function (index) {
        var writeHere = document.createElement("textarea");
        writeHere.placeholder = "Type your answer here before revealing the answer.";
        this.parentNode.insertBefore(writeHere, this);        
      })
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

function Reveal(id) {
  $('#' + id).slideToggle();
}

function Right(el, id) {
  $('#' + id).slideDown();
  $(el).removeClass('option');
  $(el).addClass('right');
}
function Wrong(el, id) {
  $('#' + id).slideDown();
  $(el).removeClass('option');
  $(el).addClass('wrong');
}