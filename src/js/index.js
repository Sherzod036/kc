$(function () {
  $('.gallery__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="sl icon-sl"></span>',
    nextArrow: '<span class="sr icon-sr"></span>',
    asNavFor: '.gallery__slider-nav'
  })
  $('.gallery__slider-nav').slick({
    asNavFor: '.gallery__slider-for',
    slidesToShow: 6,
    arrows: false,
    focusOnSelect: true
  })
})
