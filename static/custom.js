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
	agree("#feedback", "input[type='submit']");

	// Маска телефона
	$("input[name='PHONE']").mask("+7 (999) 999 99 99").on('click', function (e) {
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