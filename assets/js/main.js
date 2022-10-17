/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

function AnswersVisible() {
  let params = new URLSearchParams(location.search);
  if (params.get("quiz") == "qa") {
    return true;
  }
  return false;
}

function FooterButton(liText, href, icon = '', label) {
  return $('<li>' + liText + ' </li>')
    .append($('<a href="' + href + '"></a>')
    .addClass('icon solid ' + icon)
    .append($('<span class="label">' + label + '</span>'))
  );
}

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


    $('.written').each( function (index) {
      var writeHere = document.createElement("textarea");
      if (AnswersVisible()) {
        writeHere.placeholder = "Type your answer here.\u000AClicking the question text will reveal an answer.";
      } else {
        writeHere.placeholder = "Type your answer here.\u000ASave answers using the 'print' option at the end of the page.";
      }
      this.parentNode.insertBefore(writeHere, this);        
    })
    
    if (AnswersVisible()) {
      $('.onlyIfAnswersGiven').removeClass("onlyIfAnswersGiven");
    }
    
    let footer = document.getElementById('footer');
    if (footer) {
      if (document.getElementsByTagName('textarea').length) {
        let ansIcons = document.createElement('ul');
        $(ansIcons).addClass("icons");
        
        if (AnswersVisible()) {
          $(ansIcons)
            .append($('<li>Answers:</li>'))
            .append(FooterButton('hide', "javascript:$('.hidden').slideUp();",
                                 'fa-book', 'Hide answers'))
            .append(FooterButton('show', "javascript:$('.hidden').slideDown();",
                                 'fa-book-open', 'Show all answers'))
            .append(FooterButton('print', 'javascript:window.print();',
                                 'fa-print', 'Print page with answers'))
        }
        else {
          $(ansIcons)
            .append(FooterButton('Print page with answers',
                                 'javascript:window.print()', 'fa-print',
                                 'Print page with answers'))
        }
        $(footer).prepend(ansIcons);
      }
      
      gotoIcons = document.createElement('ul')
      $(gotoIcons).addClass('icons');
      $(gotoIcons)
        .append('<li>Go to:</li>')
        .append(FooterButton('top', '#', 'fa-arrow-up', 'Top'))
        .append(FooterButton('index', 'index.html', 'fa-bars', 'Index'))
        .append(FooterButton('discussion', '', 'discussionBoard fa-comment', 'Discussion board'))
        .append(FooterButton('encore', 'https://durham.cloud.panopto.eu/', 'fa-play', 'Encore'))
        .append(FooterButton('blackboard', '', 'blackboard fa-university', 'Blackboard'))
      ;
      $(footer).prepend(gotoIcons);
    }

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

function Reveal(id) {
  if (AnswersVisible()) {
    $('#' + id).slideToggle();
  }
}

function Right(el, id) {
  $('#' + id).slideDown();
  $(el).removeClass('option');
  $(el).addClass('right');
}
function Rightish(el, id) {
  $('#' + id).slideDown();
  $(el).removeClass('option');
  $(el).addClass('rightish');
}
function Wrong(el, id) {
  $('#' + id).slideDown();
  $(el).removeClass('option');
  $(el).addClass('wrong');
}