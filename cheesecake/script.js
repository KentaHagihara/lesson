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

    $('.arrow-left').click(function(){
        $('.zero').removeClass('zero').addClass('five');
        $('.one').removeClass('one').addClass('zero');
        $('.two').removeClass('two').addClass('one');
        $('.three').removeClass('three').addClass('two');
        $('.four').removeClass('four').addClass('three');
        $('.five').removeClass('five').addClass('four');
    })
    /*ダミーのクラス"five"を設定することでクラスの付け替えを実現*/
    $('.arrow-right').click(function(){
        $('.four').removeClass('four').addClass('five');
        $('.three').removeClass('three').addClass('four');
        $('.two').removeClass('two').addClass('three');
        $('.one').removeClass('one').addClass('two');
        $('.zero').removeClass('zero').addClass('one');
        $('.five').removeClass('five').addClass('zero');
    })


    var windowWidth = $(window).width();
    if(windowWidth < 749){
        var set;
        var repeat = function() {
            $('.zero').removeClass('zero').addClass('five');
            $('.one').removeClass('one').addClass('zero');
            $('.two').removeClass('two').addClass('one');
            $('.three').removeClass('three').addClass('two');
            $('.four').removeClass('four').addClass('three');
            $('.five').removeClass('five').addClass('four');
            set = setTimeout(repeat, 1000);
        }
        repeat();
    }
    

});

$('.arrow-left').click(function(){  
    $('.twice').addClass('move-left3');
    $('.once').addClass('move-left2'); 
    $('.topic-item').addClass('move-left');
    $('.move-left').addClass('once');
    $('.move-left2').addClass('twice');
});

$('.arrow-right').click(function(){  
    $('.twice').addClass('move-right3');
    $('.once').addClass('move-right2'); 
    $('.topic-item').addClass('move-right');
    $('.move-right').addClass('once');
    $('.move-right2').addClass('twice');
});


var position = $('.topic-item').offset().left;
        if(position == 0){
            $('.one').addClass('five');
        }
        if(position == 300){
            $('.two').addClass('one');
        }
        if(position == 600){
            $('.three').addClass('two');
        }
        if(position == 900){
            $('.four').addClass('three');
        }
        if(position == 1200){
            $('.five').addClass('four');
        }


