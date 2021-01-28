(function($){
    $(function () {
        $('.slider').slick({
            dots:true,
            autoplay:true,
            autoplaySpeed:1500,
            speed:600,
            arrows:false,
        });

    });

    $('.mob-menu').on('click', function(){

        $('.link-list').slideToggle(300);
        $('body').css('overflow-y', 'hidden');
    })
    $('.cross').on('click', function(){
        $('.link-list').slideToggle(300);
        $('body').css('overflow-y', 'scroll');
    })


})(jQuery);
