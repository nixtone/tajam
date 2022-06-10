$(document).ready(function() {
	
	// Слайдер в шапке
	$("#promoSlider").slick({
		autoplay: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 30000,
		arrows: false,
		dots: true
	});

	// Видео о компании
	$("#video .watch").fancybox();

});