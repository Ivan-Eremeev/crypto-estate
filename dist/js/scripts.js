//  Ivan Eremeev - 2020
//  Skype: ivan.eremeev_1
//  Telegram: IvanMessage
//  Email: ivan.frontcoder@gmail.com

$(document).ready(function () {

	// Брэйкпоинты js
	var	breakXl = 1400,
			breakLg = 1200,
			breakMd = 1025,
			breakSm = 769,
			breakXs = 500;

	// Подключение файлов. Использовать "//=" перед строкой пути
	// Slick Slider
	function slider(slider,sliderFor) {
	  if (slider.length) {
	    slider.slick({
	      slidesToShow: 1, // Сколько слайдов показывать на экране
	      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
	      // asNavFor: sliderFor, // Связь со слайдерами
	      dots: false, // Пагинация
	      arrows: false, // Стрелки
	      // speed: 500, // Скорость перехода слайдов
	      // autoplay: false, // Автопрокрутка
	      // autoplaySpeed: 2000, // Скорость автопрокрутки
	      // centerMode: false, // Задает класс .slick-center слайду в центре
	      // focusOnSelect: true, // Выбрать слайд кликом
	      // infinite: false, // Зацикленное пролистывание
	      // vertical: false, // Вертикальный слайдер
	      // rtl: false, // Слайды листаются справа налево
	      // centerPadding: '0px', // Отступы слева и справа чтоб увидеть часть крайних слайдов
	      // adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
	      // variableWidth: false, // Подгоняет ширину слайдов под размер элемента,
	      swipe: false, // Перелистывание пальцем
	      draggable: false, // Перелистывание мышью
	      // responsive: [ // Адаптация
	      //   {
	      //   breakpoint: 992,
	      //     settings: {
	      //       arrows: false,
	      //     }
	      //   },
	      //   {
	      //   breakpoint: 720,
	      //     settings: {
	      //       arrows: false,
	      //     }
	      //   }
	      // ]
	    });
	
	    $('.js_.form2faNextBtn').on('click', function () {
	      slider.slick('slickNext');
	    })
	  }
	}
	slider($('.js_form2faSlider'));
	
	// $('.your-slider').slick('unslick'); // Уничтожить слайдер
	
	// $('.your-slider').slick('setPosition') // Переотрисовка слайдера. Например для использования в табах

	// Запрет перехода по ссылкам
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});

	// Мобильное меню
	function myMenu(menu) {
		var menuBtn = menu.find('#menu-btn'),
				over = menu.find('#menu-over'),
				close = menu.find('#menu-close'),
				html = $('html'),
				scrollbarWidth;
		menuBtn.on('click', menuOpen);
		over.on('click', menuClose);
		close.on('click', menuClose);
		function menuOpen() {
			html.addClass('lock').css('padding-right',scrollbarWidth);
			menu.addClass('open');
			menuBtn.addClass('active');
		}
		function menuClose() {
			html.removeClass('lock').css('padding-right',0);
			menu.removeClass('open');
			menuBtn.removeClass('active');
		}
		function scrollbarWidthCalc() {
			var documentWidth = parseInt(document.documentElement.clientWidth),
					windowsWidth = parseInt(window.innerWidth);
			scrollbarWidth = windowsWidth - documentWidth;
		}
		scrollbarWidthCalc();
		$(window).resize(scrollbarWidthCalc);
	};
	myMenu($('#menu'));

	// JQuery Scrollbar // Стилизация скролла
	if ($('.js_scrollbar').length) {
		$('.js_scrollbar').scrollbar();
	}

	// Табы
	function tabs(tabs) {
		if (tabs.length) {
			tabs.each(function() {
				var trigger = $(this).find('#tabs_triggers').children(),
						content = $(this).find('#tabs_content').children(),
						time = 300;
				trigger.click(function () {
					var $this = $(this),
							index = $this.index();
					if (!$this.hasClass('active')) {
						trigger.removeClass('active');
						$this.addClass('active');
						content.hide();
						content.eq(index).fadeIn(time);
					}else {
						return false;
					}
				});
			});
		}
	}
	tabs($('.js_tabs'));

	// JQuery UI Slider
	function JQSlider(slider) {
		if (slider.length) {
			slider.each(function() {
				var $this = $(this),
						val = $this.data('value'),
						input = $this.next('input');
				$this.slider({
					range: "min",
					value: val,
					change: function (event, ui) {
						input.val(ui.value) // Установить значение ползунка в input
					}
				});
			})
		}
	}
	JQSlider($('.js_slider'));

	// Ползунок вкл/выкл
	function switcher(switcher) {
		if (switcher.length) {
			switcher.each(function () {
				var $this = $(this),
						$switch = $this.find('#switch'),
						text = $this.find('#switch_text'),
						input = $this.find('input');
				$switch.on('click', function () {
					if ($switch.hasClass('on')) {
						$switch.removeClass('on');
						text.text('Выкл');
						input.prop('checked', false);
					}else {
						$switch.addClass('on');
						text.text('Вкл');
						input.prop('checked', true);
					}
				})
			});
		}
	}
	switcher($('.js_switcher'));

	// Присваивание класса при клике
	function clickToggle(block) {
		if (block.length) {
			block.on('click', function () {
				$(this).toggleClass('active');
			});
		}
	}
	clickToggle($('.sidebar__user'));

	// Вставляет svg в html, позволяет управлять им через css 
	$('img[src$=".svg"]').each(function(){
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function(data) {
			var $svg = $(data).find('svg');
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			$svg = $svg.removeAttr('xmlns:a');
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}
			$img.replaceWith($svg);
		}, 'xml');
	});

	// Создать игру. Кол-во игроков
	function CounterGamers() {
		if ($('.createGame__players')) {
			var inputs = $('.createGame__player input'),
					input = false;
			inputs.change(function (e) { 
				input = $('.createGame__player input:checked').length;
				$('.createGame__num').text(input);
			});
		}
	}
	CounterGamers();
	
});