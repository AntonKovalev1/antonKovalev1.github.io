$(document).ready(function(){





    /*** Выпадающие списки  ***/

    $('.block4-item_title').click(function(){

        var Obj =$(this).parent();


        function closeBlock(Obj) {
            Obj.removeClass('open2');
            setTimeout(function(){Obj.removeClass('open')}, 200);
        }

        function openBlock(Obj) {
            Obj.addClass('open');
            setTimeout(function(){Obj.addClass('open2')}, 10);
        }


        if (Obj.hasClass('open')) {
            closeBlock(Obj);
        } else {
            openBlock(Obj);
        }
        
        return false;

    });




/*
    $('.servicopen').click(function () {
        $(this).parent().toggleClass('in').next().slideToggle();
        $('.servicopen').not(this).parent().removeClass('in').next().slideUp();
    });
*/





    /***  Top Menu  ***/

    $('#topmenu-id').click(function(){

        if ($(this).hasClass('openedmenu')) 
        {
            $(this).removeClass('openedmenu');
            $('#topmenu-links-id').hide();
            $('#main-id').show();
        }
        else
        {
            $(this).addClass('openedmenu');
            $('#topmenu-links-id').show();
            $('#main-id').hide();
        }

        return false;
    });



  

    // Fancybox для слайдеров
    Fancybox.bind(".block13-body_slide", {

        groupAll: false,

        hideScrollbar: true,

        Thumbs: {
            showOnStart: false,
        },

        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ["close"],
            },
        },

    });




    /*** Slick Slider  ***/

    $('.block13-body').slick({
        dots: false,
        arrows: true,
        prevArrow: '<span class="arrow-left"><img src="public/images/fromleft.svg"></span>',
        nextArrow: '<span class="arrow-right"><img src="public/images/from_right.svg"></span>'
    }
    );

    








    Fancybox.bind(".block11-body_item img", {

        groupAll: true,

        hideScrollbar: true,

        Thumbs: {
            showOnStart: false,
        },

        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ["close"],
            },
        },

    });





    // Кнопка подробнее
    $('.about-button a:eq(0)').click(function(){
        $(this).hide();
        $('.about-text:eq(0)').show();
        return false;
    });












});