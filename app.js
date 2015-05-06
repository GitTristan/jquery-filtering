$(document).ready(function() {
	$('.dark').on('click', function() {
		$('body').css('background-image', 'url(img/dark_wood.png)');
	});

	$('.light').on('click', function() {
		$('body').css('background-image', 'url(img/tileable_wood_texture.png)');
	});

	$('.darker').on('click', function() {
		$('body').css('background-image', 'url(img/forest.jpg)');
	});

})
