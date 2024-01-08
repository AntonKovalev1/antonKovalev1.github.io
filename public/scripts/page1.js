$(document).ready(function(){

    $('.block4-item_title').click(function(){


        var Obj =$(this).parent();


        function closeBlock(Obj) {
            Obj.removeClass('open');
        }

        function openBlock(Obj) {
            Obj.addClass('open');
        }


        if (Obj.hasClass('open')) {
            closeBlock(Obj);
        } else {
            openBlock(Obj);
        }
        
        return false;

    });






    $('.block11-body_item p').click(function(){

        if (!$(this).hasClass('block11-body_item_p')) { 
            alert('OPA');
        } 

    });



    $('.block13-body').slick({
        dots: false,
        arrows: true,
        prevArrow: '<span class="arrow-left"><img src="public/images/fromleft.svg"></span>',
        nextArrow: '<span class="arrow-right"><img src="public/images/from_right.svg"></span>'
        /*nextArrow: '<span class="arrow-right"<img src="public/images/from_right.svg"><span>',*/
    }
    );



    Fancybox.bind("[data-fancybox]", {
        // Your custom options
        options: {
            Thumbs: false,
          } 

        });




});