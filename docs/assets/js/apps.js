
// preloader

$(window).on('load', function() {
	$('#preloader').delay(1282).fadeOut('slow');
	$('body').delay(128).css({
		'overflow': 'visible'
	});
	if (this.scrollY >= 40) {
		$(".navbar").addClass("sticky");
	}
	else {
		$(".navbar").removeClass("sticky");
	}
});

// navbar

$(window).scroll(function() {
	if (this.scrollY >= 100) {
		$(".navbar").addClass("sticky");
	}
	else {
		$(".navbar").removeClass("sticky");
	}
});


  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
