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


    $('.arrow-2').click(function(){
        $('.one').css('display','none');
        $('.two').css('transition','all 1s');
        $('.two').css('transform','translate(-310px,0)');
        $('.three').css('transition','all 1s');
        $('.three').css('transform','translate(-310px,0)');
    });
});

