$(document).ready(function(){
	$(".header__second-line").on("click","a", function (event) {
		event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 500);
	});
});

$(document).ready(function(){
	$(".front__second-line").on("click","a", function (event) {
		event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 500);
	});
});


// = = бургер = = =
$(document).ready(function() {
	$('.front__burger').click(function(event) {
		$('.front__burger, .front__topmenu, .front__center').toggleClass('active');
	});
});
// = = бургер = = =

$(document).ready(function() {
	$('.inTop').click(function(event) {
		$('.front__burger, .front__topmenu, .front__center').removeClass('active');
	});
});
