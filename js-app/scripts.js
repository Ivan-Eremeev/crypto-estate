//  Ivan Eremeev - 2020
//  Skype: ivan.eremeev_1
//  Telegram: IvanMessage
//  Email: ivan.frontcoder@gmail.com

$(document).ready(function () {

	// Брэйкпоинты js
	var	breakXl = 1920,
			breakLg = 1200,
			breakMd = 1050,
			breakSm = 820,
			breakXs = 395;

	// Подключение файлов. Использовать "//=" перед строкой пути
	//= libs-settings/slick_settings.js

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

	// Модальное окно
	function modal(modal) {
		$('.modal-trigger').on('click', function() {
			var $this = $(this),
					data = $this.data('modal'),
					thisModal = $(data);
			modalShow(thisModal);
		});
	};
	// Открытие модального окна
	function modalShow(thisModal) {
		var html = $('html'),
				modalClose = thisModal.find($('.modal__close')),
				documentWidth = parseInt(document.documentElement.clientWidth),
				windowsWidth = parseInt(window.innerWidth),
				scrollbarWidth = windowsWidth - documentWidth;
		thisModal.show(0, function() {
			setTimeout(thisModal.addClass('open'),500);
		});
		html.addClass('lock').css('padding-right',scrollbarWidth);
		modalClose.on('click', function() {
			modalHide(thisModal);
		});
		thisModal.on('click', function(e) {
			if (thisModal.has(e.target).length === 0) {
				modalHide(thisModal);
			}
		});
	};
	// Закрытие модального окна
	function modalHide(thisModal) {
		var html = $('html');
		thisModal.removeClass('open');
		thisModal.hide();
		html.removeClass('lock').css('padding-right',0);
	};
	modal();

	// Circles | Круговой счетчик
	function circleTimer(timer) {
		var val = timer.data('value'),
				duration = val * 1000,
				$id = timer.attr('id');
		var $id = Circles.create({
			id: $id,
			radius:	14,
			value: val,
			maxValue: val,
			width: 2,
			text: function (value) { return parseInt(value); },
			colors: ['#323442', '#25ab71'],
			duration: duration,
		});
		$(window).resize(function () {
			if ($(window).width() >= breakXl) {
				$id.updateRadius(14);
			}else {
				$id.updateRadius(10);
			}
		})
	}
	circleTimer($('#circle-1'));
	circleTimer($('#circle-2'));
	circleTimer($('#circle-3'));
	circleTimer($('#circle-4'));
	circleTimer($('#circle-5'));

});