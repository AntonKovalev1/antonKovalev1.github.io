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






    $('.zapisonline').click(function(){
        $('body').addClass('popupmenu-right-open');
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


    $('.header-burger-a:eq(0)').click();







    var swiper = new Swiper(".slider-images", {

        createElements: true,

        pagination: {
            el: ".swiper-pagination"
        },

        lazy: true,

        speed: 200,
        spaceBetween: 0,

    });


});