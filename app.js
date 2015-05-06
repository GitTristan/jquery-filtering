$(document).ready(function() {
	$('.dark').on('click', function() {
		$('body').css('background-image', 'url(img/dark_wood.png)',
		 "background-size", "auto");
	});

	$('.light').on('click', function() {
		$('body').css('background-image', 'url(img/tileable_wood_texture.png)',
		 "background-size", "auto");
	});

	$('.darker').on('click', function() {
		$('body').css('background-image', 'url(img/forest.jpg)',
		 "background-size", "cover");
	});

})
