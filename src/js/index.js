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

  function appartmentActiveButton(ctx, button, buttonActive) {
    $(button).removeClass(buttonActive)

    ctx.addClass(buttonActive)
  }

  $('.appartment__type .appartment__button').on('click', function () {
    const self = $(this)

    appartmentActiveButton(
      self,
      '.appartment__type .appartment__button',
      'appartment__button--active'
    )
  })

  $('.appartment__count .appartment__button').on('click', function () {
    const self = $(this)

    appartmentActiveButton(
      self,
      '.appartment__count .appartment__button',
      'appartment__button--active'
    )
  })
  $('.appartment__size .appartment__button').on('click', function () {
    const self = $(this)

    appartmentActiveButton(
      self,
      '.appartment__size .appartment__button',
      'appartment__button--active'
    )
  })
})
