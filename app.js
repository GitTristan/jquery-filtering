$(document).ready(function() {
	$('.dark').on('click', function() {
		$('body').css({'background-image': 'url(img/dark_wood.png)',
		 "background-size": "auto"});
	});

	$('.light').on('click', function() {
		$('body').css({'background-image': 'url(img/tileable_wood_texture.png)',
		 "background-size": "auto"});
	});

	$('.darker').on('click', function() {
		$('body').css({'background-image': 'url(img/forest.jpg)',
		 "background-size": "cover"});
	});

	$(".high").on("click", function() {
		$(".image-container .home").sort(function(a, b) {
			var compA = $(a).data('price');
			var compB = $(b).data('price');
			return (compA > compB) ? -1 : (compA < compB) ? 1 : 0;
		}).appendTo(".image-container");
		event.preventDefault();
	});

	$(".low").on("click", function() {
    $(".image-container .home").sort(function(a, b) {
      var compA = $(a).data('price');
      var compB = $(b).data('price');
      return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
    }).appendTo(".image-container");
		event.preventDefault();
  });

	$(".filters input:checkbox").on("click", function() {
	  $(".home").hide();
		var min = $(this).data("min");
		var max = $(this).data("max");
		$(".home").filter(function(index, home) {
			return $(this).data("price") >= min && $(this).data("price") < max;
		}).show();
	});

})
