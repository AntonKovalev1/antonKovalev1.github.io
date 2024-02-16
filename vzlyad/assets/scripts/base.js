$(document).ready(function(){



    function closePopupmenu() {
        $('.popupmenu-after').addClass('popupmenu-after-display');
        setTimeout(function(){
            $('.popupmenu-after').removeClass('popupmenu-after-display');
        }, 200);
    }




    $('.header-burger-a:eq(0)').click(function(){

        if (!$('#popupmenu-left-body').attr('popupmenu-left-body')) {
            $('#popupmenu-left-body').append($('.footer-wrap').parent().html());
            $('#popupmenu-left-body').attr('popupmenu-left-body', true);

            // Обработчик на кнопку запись онлайн
            $('#popupmenu-left-body .zapisonline').click(function(){
                zapisonlineOpen();
                return false;
            });

        }

        $('body').addClass('popupmenu-left-open');

       return false;

    });


    function closePopupmenuLeft() {
        $('body').removeClass('popupmenu-left-open');
        closePopupmenu();
    }

    $('.popupmenu-left-close:eq(0)').click(function () {
        closePopupmenuLeft();
    });

    /*
    $('.popupmenu-after:eq(0)').click(function () {
        closePopupmenu();
    });
    */




    function openPopupmenuRight() {
        $('body').addClass('popupmenu-right-open');
    }

    function zapisonlineOpen(){

        if ($('body').hasClass('popupmenu-left-open')) {
            closePopupmenuLeft();
            setTimeout(function(){
                openPopupmenuRight();
            }, 300);
        }
        else
            openPopupmenuRight();

    }

    $('.zapisonline').click(function(){
        zapisonlineOpen();
        return false;
    });



    function closePopupmenuRight() {
        $('body').removeClass('popupmenu-right-open');
        closePopupmenu();
    }

    $('.popupmenu-right-close:eq(0)').click(function () {
        closePopupmenuRight();
    });




    /*
     $('.popupmenu-after:eq(0)').click(function () {
     closePopupmenu();
     });
     */




     /*

    let x;
    addEventListener('touchstart', e => x = e.changedTouches[0].clientX);
    addEventListener('touchend', e => e.changedTouches[0].clientX - x < -50 && swipeLeft());

    function swipeLeft() {
        closePopupmenu();
    }

    */

    /*
    addEventListener('touchstart', () => { console.log('start') });
    addEventListener('touchend', () => { console.log('end') });
    addEventListener('touchmove', () => { console.log('move') });
    addEventListener('touchcancel', () => { console.log('cancel') });
    */


    //$('.header-burger-a:eq(0)').click();








    if ($('.slider-mobile').length)
    var swiper = new Swiper(".slider-mobile .slider-images", {

        createElements: false,

        pagination: {
            el: ".slider-mobile .swiper-pagination"
        },

        lazy: true,

        speed: 200,
        spaceBetween: 0,

    });


    if ($('.slider-desktop').length)
    var swiper2 = new Swiper(".slider-desktop .slider-images", {

        createElements: false,

        navigation: {
            nextEl: ".slider-desktop .swiper-button-next",
            prevEl: ".slider-desktop .swiper-button-prev",
        },

        lazy: true,

        speed: 200,
        spaceBetween: 0,

    });


    if ($('.carusell').length) {

        var swiper3 = new Swiper(".carusell", {


            slidesPerView: 3,
            spaceBetween: 30,

            loop: true,

            navigation: {
                nextEl: ".carusell .swiper-button-next",
                prevEl: ".carusell .swiper-button-prev",
            },

            speed: 200,

            on: {
                init: function () {

                },
                activeIndexChange: function(e) {
                    //console.log(e);
                    var aslide = e.activeIndex + 1;
                    $('.main-block-5-item').removeClass('main-block-5-item-center');
                    $('.carusell').find('.main-block-5-item:eq(' + aslide + ')').addClass('main-block-5-item-center');

                },
            },
        
        });
    
        swiper3.slideTo(0);

    }










});