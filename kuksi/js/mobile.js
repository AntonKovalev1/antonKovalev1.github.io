$(document).ready(function(){
    if ($(window).width() <= 500) {



    // Пробежимся по разделам, сгенерируем меню из разделов каталога
    var catalogmenu_html = '';
    $('.products__wrapper h2').each(function(e){
        $(this).parent().parent().attr('id', 'section' + e);
        catalogmenu_html += '<a class="mobile__menufixed-a" href="#section' + e + '" id="">' + $(this).html() + '</a>';
    });
    catalogmenu_html += '<a href="#"></a>';
    $('.products__wrapper:eq(0)').before('<div id="mobile__menufixed" class="mobile__menufixed"><div class="mobile__menufixed-body"><div class="mobile__menufixed-body2">' + catalogmenu_html + '</div></div></div>');

    // Сразу выделим первый элемент
    $('.mobile__menufixed a:eq(0)').addClass('activate');


    

    /* отслеживает скроллинг стрнаницы и подсвечивает соответствующие пункты */
    var sections = $('section') , nav = $('#mobile__menufixed') , nav_height = nav.outerHeight();

    var activeP = 0;
    var indexP = 0;

    $(window).on('scroll', function () {

        var cur_pos = $(this).scrollTop();

        sections.each(function() {

            var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        
            if (cur_pos >= top && cur_pos <= bottom) {

                indexP = nav.find('a').index($('a[href="#'+$(this).attr('id')+'"]'));
                //console.log(indexP + '...' + activeP);

                if (indexP != -1)
                if (indexP != activeP) {

                    nav.find('a').removeClass('activate');
                    sections.removeClass('activate');
                    
                    $(this).addClass('activate');
                    nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('activate');

                    activeP = indexP;

                    /* Перемотка самого меню */
                    var marginL = nav.find('a.activate').offset().left + $('.mobile__menufixed-body:eq(0)').scrollLeft() - 20;
                    //console.log(marginL);

                    $('.mobile__menufixed-body:eq(0)').animate({
                        scrollLeft: marginL
                    }, 200);


                }        

            }

        });

    });

    nav.find('a').on('click', function () {

        var $el = $(this), id = $el.attr('href');
        
        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 10
        }, 500);
        
        return false;

    });
    








    }

});