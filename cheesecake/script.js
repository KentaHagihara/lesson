$(function(){
    var $close = $('.close-modal');
    $close.click(function(){
        $('.menu').fadeOut();
    });
    $('.icon-menu').click(function(){
        $('.menu').fadeIn();
    });
    $close.hover(function(){
        $('.close-modal').addClass('fa-times-hover')
    },function(){
        $('.close-modal').removeClass('fa-times-hover');
    })

    $(window).scroll(function(){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > position - windowHeight + 50){
                $(this).addClass('active');
            }
        })
    })
    $(window).ready(function(){
        $('.fadein-immediatement').each(function(){
            $(this).addClass('active');
        })
    })

});

