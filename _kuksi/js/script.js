//бургер меню
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .mob__menu').toggleClass('active-burger');
        event.stopPropagation(); // Предотвращает всплытие события наверх
    });

    $('.mob__close').click(function() {
        $('.header__burger, .mob__menu').removeClass('active-burger');
    });

    $(document).click(function(event) {
        // Проверяем, что клик был сделан вне элемента .mob__menu
        if (!$(event.target).closest('.mob__menu').length && !$(event.target).is('.header__burger')) {
            // Если клик вне .mob__menu и не на кнопке бургера, убираем класс active-burger
            $('.header__burger, .mob__menu').removeClass('active-burger');
        }
    });
});

/*добавление хедеру класса при скролле*/
$(window).on( "load", function() {
    var h_hght = 10;
    var height = $(window).scrollTop();
  
      if (height >= h_hght) {
          $('header').addClass('scroll__bg-color');
      } else {
          $('header').removeClass('scroll__bg-color');
      }

      $(window).scroll(function () {
          var height = $(window).scrollTop();
          if (height >= h_hght) {
              $('header').addClass('scroll__bg-color');
          } else {
              $('header').removeClass('scroll__bg-color');
          }
      });
});

/*выбор варианта меню*/
$('.menu__item').click(function () {
    $('.menu__item').removeClass('menu__item-active');
    $(this).addClass('menu__item-active');
});

/*слайдер на главной странице*/
new Swiper('.main__slider-container .main__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    speed: 2000,
    loop: true,
    /*autoplay: {
      delay: 4000,
    },*/
    navigation: {
        nextEl: ".main__slider-container .swiper-button-next",
        prevEl: ".main__slider-container .swiper-button-prev",
    },
});

/*переворачивание карты товара*/
$(document).ready(function() {
    $('.prod__card').on('click', '.compound-front', function() {
        $(this).closest('.prod__card').addClass('rotated');
    });

    $('.prod__card').on('click', '.compound-back', function() {
        $(this).closest('.prod__card').removeClass('rotated');
    });
});

/*ИЗМЕНЕНИЕ КОЛИЧЕСТВА ТОВАРОВ В КАРТОЧКЕ ТОВАРА*/
$(document).ready(function() {
    $('.basket-quantity__btn-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        if (count < 1) {
          count = 1;
        } else {
          count = count;
        }
        $input.val(count);
        $input.change();
        return false;
    });
    $('.basket-quantity__btn-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
  });