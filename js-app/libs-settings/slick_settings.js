// Slick Slider
function slider(slider,sliderFor) {
  if (slider.length) {
    slider.slick({
      slidesToShow: 1, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      dots: false, // Пагинация
      arrows: false, // Стрелки
      swipe: false, // Перелистывание пальцем
      draggable: false, // Перелистывание мышью
      fade: true,
    });

    $('.js_.form2faNextBtn').on('click', function () {
      slider.slick('slickNext');
    })
  }
}
slider($('.js_form2faSlider'));