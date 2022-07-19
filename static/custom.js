$(document).ready(function() {
	
	// Слайдер в шапке
	$("#promoSlider").slick({
		autoplay: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true
	});

	// 
	$("#peopleSlider .slide_area").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		asNavFor: "#peopleSlider  .people_area .inner"
	});
	$("#peopleSlider  .people_area .inner").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: "#peopleSlider .slide_area",
		arrows: true,
		centerMode: true,
		focusOnSelect: true
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
	agree("#feedback", "input[type='submit']");

	// Попап
    $(".cpp").click(function(event) {
        event.preventDefault();
        $(".overlay .inner > *").hide();
        $(".overlay, .overlay ."+$(this).data('pp')).fadeIn(150);
    });
    $(".overlay").click(function(event) {
        if(!$(".popup").is(event.target) && $(".popup").has(event.target).length === 0 || event.target.className == "close") $(".overlay").fadeOut(150);
    });

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

    // Проверка формата E-mail
    var charmap = {};
    var rus = "йцукенгшщзхъфывапролджэячсмитьбю".split('');
    var eng = "qwertyuiop[]asdfghjkl;'zxcvbnm,.".split('');
    for (var i = 0; i < rus.length; i++) {
        charmap[rus[i]] = eng[i];
    }
    function rustoeng(string) {
        return string.replace(/([^a-z\s])/gi,
        function (x) {
            return charmap[x] || x;
        });
    }
    $("input[name='EMAIL']").blur(function(event) {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if(pattern.test($(this).val()) || $(this).val() == '') {
            $(this).closest("form").find("input[type='submit']").attr('disabled', false);
        }
        else {
            alert("Неверный формат E-mail");
            $(this).closest("form").find("input[type='submit']").attr('disabled', true);
        }
    }).on('input keydown paste', function (e) {
        $this = $(this);
        setTimeout(function () {
            var newval = rustoeng($this.val());
            if ($this.val() != newval) {
                var caret = $this.caret();
                $this.val(newval);
                $this.caret(caret);
            }
        }, 0);
    });

});