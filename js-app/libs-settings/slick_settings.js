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