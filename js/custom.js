$(function(){
	'use strict';
  var topBox = $('.back-to-top');
  // add class show-back-to-top to back-to-top box on scroll
  $(window).scroll(function () {
  if ( $( this ).scrollTop() > 1000 ) {
    topBox.addClass( 'show-back-to-top' );
  } else {
    topBox.removeClass( 'show-back-to-top' );
  }
});
  // Click event to scroll to top.
  topBox.click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 800 );
    return false;
  });
    $(".learn-more").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });

