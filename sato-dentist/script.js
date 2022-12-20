$(function(){
    $(window).scroll(function(){
        $('.header-top').each(function(){
            var scroll = $(window).scrollTop();
            if(scroll > 5){
                $('.header-top-disappear').addClass('hide');
                $('.remain-left').addClass('to-right');
                $('.header-right').addClass('to-left');
                $('.header-top-remain').addClass('scroll');
                $('.first').addClass('hide');
                $('.second').removeClass('hide');
            } else {
                $('.header-top-disappear').removeClass('hide');
                $('.remain-left').removeClass('to-right');
                $('.header-right').removeClass('to-left');
                $('.header-top-remain').removeClass('scroll');
                $('.first').removeClass('hide');
                $('.second').addClass('hide');              
            }
            if(scroll > 300){
                $('.header-middle-right').addClass('fix-hmr');
            } else if(scroll < 200) {
                $('.header-middle-right').removeClass('fix-hmr');                
            }
        })
    })
})
