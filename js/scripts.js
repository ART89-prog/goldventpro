$(() => {


  //setTimeout(() => setHeight($(swiper.$el).find('.review')))
  if ($(window).width() < 480) {
    $(".cases_items .cases_item").addClass("active");
    $(".cases_items .cases_item:first-child").removeClass("active");
  }

  // Моб. меню
  $('header .mob_menu_btn').click((e) => {
    e.preventDefault()

    $('header .mob_menu_btn').addClass('active')
    $('body').addClass('menu_open')
    $('header .menu').addClass('show')
    $('.overlay').fadeIn(300)
  })

  $('header .close_btn, header .menu .item a, .overlay').click((e) => {
    $('header .mob_menu_btn').removeClass('active')
    $('body').removeClass('menu_open')
    $('header .menu').removeClass('show')
    $('.overlay').fadeOut(300)
  })



  // Фокус при клике на название поля
  $('body').on('click', 'form label', function () {
    $(this).closest('.line').find('input, textarea').focus()
  })



  $('body').on('click', '.modal_link', function (e) {
    e.preventDefault()

    Fancybox.close(true)
    Fancybox.show([{
      src: $(this).data('content'),
      type: 'inline',
    }]);
  })



  const licenseSliders = [],
    license = document.querySelectorAll('.license .swiper')

  license.forEach(function (el, i) {
    el.classList.add('license_s' + i)

    let options = {
      loop: true,
      speed: 500,
      watchSlidesProgress: true,
      slideActiveClass: 'active',
      slideVisibleClass: 'visible',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      preloadImages: false,
      lazy: {
        enabled: true,
        checkInView: true,
        loadOnTransitionStart: true,
        loadPrevNext: true
      },
      breakpoints: {
        0: {
          spaceBetween: 20,
          slidesPerView: 1
        },
        480: {
          spaceBetween: 20,
          slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 2
        },
        1023: {
          spaceBetween: 30,
          slidesPerView: 3
        },
        1280: {
          spaceBetween: 30,
          slidesPerView: 4
        }
      },
      on: {
        init: swiper => {
          setTimeout(() => setHeight($(swiper.$el).find('license .swiper-slide')))
        },
        resize: swiper => {
          setTimeout(() => {
            $(swiper.$el).find('.license .swiper-slide').height('auto')
            setHeight($(swiper.$el).find('.license .swiper-slide'))
          })
        }
      }
    }

    licenseSliders.push(new Swiper('.license_s' + i, options))
  })


  const firstSliders = [],
    first = document.querySelectorAll('.first-section .swiper')

  first.forEach(function (el, i) {
    el.classList.add('first_s' + i)

    let options = {
      loop: true,
      speed: 500,
      watchSlidesProgress: true,
      slideActiveClass: 'active',
      slideVisibleClass: 'visible',
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2'
      },
      pagination: {
        el: '.swiper-pagination2',
        type: 'bullets',
        clickable: true,
      },
      preloadImages: false,
      lazy: {
        enabled: true,
        checkInView: true,
        loadOnTransitionStart: true,
        loadPrevNext: true
      },
      breakpoints: {
        0: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        480: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        768: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        1023: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        1280: {
          spaceBetween: -160,
          slidesPerView: 1
        }
      },
      on: {
        init: swiper => {
          setTimeout(() => setHeight($(swiper.$el).find('.first-section .swiper-slide')))
        },
        resize: swiper => {
          setTimeout(() => {
            $(swiper.$el).find('.first-section .swiper-slide').height('auto')
            setHeight($(swiper.$el).find('.first-section .swiper-slide'))
          })
        }
      }
    }

    firstSliders.push(new Swiper('.first_s' + i, options))
  })




  const reviewsSliders = [],
    reviews = document.querySelectorAll('.reviews .swiper')

  reviews.forEach(function (el, i) {
    el.classList.add('reviews_s' + i)

    let options = {
      loop: true,
      speed: 500,
      watchSlidesProgress: true,
      slideActiveClass: 'active',
      slideVisibleClass: 'visible',
      navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3'
      },
      preloadImages: false,
      lazy: {
        enabled: true,
        checkInView: true,
        loadOnTransitionStart: true,
        loadPrevNext: true
      },
      breakpoints: {
        0: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        480: {
          spaceBetween: 0,
          slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination3',
            type: 'bullets',
            clickable: true,
          },
        },
        768: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        1023: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        1280: {
          spaceBetween: -250,
          slidesPerView: 1
        }
      },
      on: {
        init: swiper => {
          setTimeout(() => setHeight($(swiper.$el).find('.reviews .swiper-slide')))
        },
        resize: swiper => {
          setTimeout(() => {
            $(swiper.$el).find('.reviews .swiper-slide').height('auto')
            setHeight($(swiper.$el).find('.reviews .swiper-slide'))
          })
        }
      }
    }

    reviewsSliders.push(new Swiper('.reviews_s' + i, options))
  })




  const projectsSliders = [],
    projects = document.querySelectorAll('.projects .swiper')

  projects.forEach(function (el, i) {
    el.classList.add('projects_s' + i)

    let options = {
      loop: true,
      speed: 500,
      watchSlidesProgress: true,
      slideActiveClass: 'active',
      slideVisibleClass: 'visible',
      navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4'
      },
      pagination: {
        el: '.swiper-pagination4',
        type: 'fraction',
      },
      preloadImages: false,
      lazy: {
        enabled: true,
        checkInView: true,
        loadOnTransitionStart: true,
        loadPrevNext: true
      },
      breakpoints: {
        0: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        480: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        768: {
          spaceBetween: 0,
          slidesPerView: 1
        },
        1023: {
          spaceBetween: 00,
          slidesPerView: 1
        },
        1280: {
          spaceBetween: 0,
          slidesPerView: 1
        }
      },
      on: {
        init: swiper => {
          setTimeout(() => setHeight($(swiper.$el).find('projects .swiper-slide')))
        },
        resize: swiper => {
          setTimeout(() => {
            $(swiper.$el).find('.projects .swiper-slide').height('auto')
            setHeight($(swiper.$el).find('.projects .swiper-slide'))
          })
        }
      }
    }

    projectsSliders.push(new Swiper('.projects_s' + i, options))
  })

  // Показать контент
  $(".hide-content").hide();
  $(".object_link").click(function (e) {
    e.preventDefault();
    $(this).next(".hide-content").slideToggle();
    $(".object_link").addClass("active");
  });


  // Аккордион
  $('body').on('click', '.accordion .accordion_item .accordion_item-head', function (e) {
    e.preventDefault()

    const $item = $(this).closest('.accordion_item'),
      $accordion = $(this).closest('.accordion')

    if ($item.hasClass('active')) {
      $item.removeClass('active').find('.accordion_item-data').slideUp(300)
    } else {
      $accordion.find('.accordion_item').removeClass('active')
      $accordion.find('.accordion_item-data').slideUp(300)

      $item.addClass('active').find('.accordion_item-data').slideDown(300)
    }
  })


  $('select').niceSelect();


  $(document).on('change', '.error', function () {

    $(this).removeClass('error');
    if ($(this).attr('class') != 'checked') { $(this).next().hide(); }
  })

  $(document).on('click', '.submit_btn', function (event) {
    event.preventDefault();
    var dataForAjax = "action=form&";
    var addressForAjax = myajax.url;
    var valid = true;
    var form = $(this).closest('form');
    $(this).closest('form').find('input:not([type=submit]),textarea').each(function (i, elem) {
      if (this.value.length < 3 && $(this).hasClass('required')) {
        valid = false;
        $(this).addClass('error');
        $(this).next().show();
      }
      if ($(this).attr('name') == 'email' && $(this).hasClass('required')) {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (!pattern.test($(this).val())) {
          valid = false;
          $(this).addClass('error');
          $(this).next().show();
        }
      }
      if ($(this).hasClass("checked") && !$(this).prop("checked")) {
        $(this).addClass('error');
        valid = false;
      }

      if (i > 0) {
        dataForAjax += '&';
      }
      dataForAjax += this.name + '=' + this.value;
    })

    if (!valid) {
      return false;
    }

    $.ajax({
      type: 'POST',
      data: dataForAjax,
      url: addressForAjax,
      success: function (response) {

        Fancybox.close()

        Fancybox.show([{
          src: "#thanks",
          type: 'inline'
        }])

        $('form').trigger("reset");
      }
    });
  });


})


