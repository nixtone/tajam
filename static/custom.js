$(document).ready(function() {
	
	// Слайдер в шапке
	$("header .slider").slick({
		autoplay: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true
	});

	// Видео о компании
	$("#video .watch").fancybox();

	// Плавная прокрутка по якорю --v.1
	$('nav a').on('click', function(event) {
		$('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
		event.preventDefault();
	});

	// Отключение отправки при отказе от соглашения
	function agree(parent, btn) {
		$("input[name='agree']").click(function(event){
			if($(this).prop('checked') == false) {
				$(this).closest(parent).find(btn).attr('disabled', true);
			}
			else {
				$(this).closest(parent).find(btn).attr('disabled', false);
			}
		});
	}
	agree("form", "input[type='submit']");

	// Отзывы
	$('#people .slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '#people .slider-nav'
	});
	$('#people .slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '#people .slider-for',
		centerMode: true,
		focusOnSelect: true
	});

	// Маска телефона
	$("input[name='PHONE']").mask("+7 (999) 999-9999").on('click', function (e) {
	    var caret = e.target.selectionStart;
	    var text = $(this).val();
	    var lastChar = text.indexOf('_');
	    if (lastChar < caret && lastChar !== -1) {
	        $(this).caret(lastChar);
	    }
	}).on('keydown', function (e) {
	    if (e.keyCode === 39 || e.keyCode === 37) {
	        var caret = e.target.selectionStart;
	        var text = $(this).val();
	        var lastChar = text.indexOf('_');
	        if (lastChar <= caret && lastChar !== -1) {
	            $(this).caret(lastChar - 1);
	        }
	    }
	});

});