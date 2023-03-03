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



  $('body').on('click', '.modal_link', function (e) {
    e.preventDefault()

    Fancybox.close(true)
    Fancybox.show([{
      src: $(this).data('content'),
      type: 'inline',
    }]);
  })


  const swiper = new Swiper('.swiper-container', {
    // Default parameters
    slidesPerView: 2,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  })


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


