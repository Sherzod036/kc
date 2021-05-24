$(function () {
  $('.gallery__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="sl icon-sl"></span>',
    nextArrow: '<span class="sr icon-sr"></span>',
    asNavFor: '.gallery__slider-nav'
  })

  // $('.vjs-icon-placeholder').on('click', function () {
  //   // $('.video-js .vjs-big-play-button .vjs-icon-placeholder:before ').css({
  //   //   display: 'none !important'
  //   // })

  //   $('.vjs-icon-placeholder:before').css('background-image', 'url(unknown)')
  // })

  $('.gallery__slider-nav').slick({
    asNavFor: '.gallery__slider-for',
    slidesToShow: 6,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  })

  const hamb = $('.hamburger')
  hamb.on('click', () => {
    hamb.toggleClass('is-active')
    $('.header__nav').slideToggle().toggleClass('d-block')
  })

  function appartmentActiveButton(ctx, button, buttonActive) {
    $(button).removeClass(buttonActive)

    ctx.addClass(buttonActive)
  }

  $('.appartment__type .module-border-wrap').on('click', function () {
    const self = $(this)

    appartmentActiveButton(
      self,
      '.appartment__type .module-border-wrap',
      'module-border-wrap--active'
    )
  })

  $('.appartment__count .module-border-wrap').on('click', function () {
    const self = $(this)

    appartmentActiveButton(
      self,
      '.appartment__count .module-border-wrap',
      'module-border-wrap--active'
    )
  })
  $('.appartment__size .module-border-wrap').on('click', function () {
    const self = $(this)

    appartmentActiveButton(
      self,
      '.appartment__size .module-border-wrap',
      'module-border-wrap--active'
    )
  })
})

if (window.innerWidth > 1200) {
  const scene = document.getElementById('scene')
  const parallax = new Parallax(scene)
}

videojs(document.querySelector('.video-js'))
