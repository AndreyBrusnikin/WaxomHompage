$('#toggle-search').on('click', function() {
    $('#searchBar').toggle('display: inline-block');
});

jQuery(function($){
    $(document).mouseup(function (e){
        var div = $("#searchBar");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.fadeOut("fast");
        }
    });
});

$(document).ready(function(){
    $('#owlcarousel1').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        transitionStyle : "fade",
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1,
                nav: true
            }
        }
    })
});

$(document).ready(function(){
    $('#owlcarousel2').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            568:{
                items:2

            },
            1024:{
                items:3
            }
        }
    })
});


wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,       // default
        live:         true        // default
    }
)
wow.init();

$(document).ready(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false

        }
    });

    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
});


$(function() {
    var headerHeight, videoHeight, calc;
    function headerVideoHeight() {
        headerHeight = $('section').outerHeight();
        videoHeight = $('section .header-video iframe').height();
        calc = headerHeight / videoHeight;
        if (window.innerWidth < ($('section').outerHeight() * 1.78)) {
            // 1.78 == 1920 / 1080
            $('section .header-video iframe').css('transform','translateY(-50%) scale(' + calc +')');
        } else {
            $('section .header-video iframe').css('transform','translateY(-50%)',);
        }
    }

    headerVideoHeight();

    var resizeTimer;
    $(window).on('resize',function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            headerVideoHeight();
        }, 150);
    });

    $('.pause').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('stopped')) {
            $('iframe').vimeo('play');
            $(this).removeClass('stopped');
            $("#videotitle").hide();
            $("#videodescription").hide();
            $("#playback").removeClass('icon-play');
            $("#playback").addClass('icon-pause');
            $(".play-holder").css(
                {'background': 'rgba(0,0,0,0.0)'}
            );

        } else {
            $('iframe').vimeo('pause');
            $(this).addClass('stopped');
            $("#videotitle").show();
            $("#videodescription").show();
            $("#playback").removeClass('icon-pause');
            $("#playback").addClass('icon-play');
            $(".play-holder").css(
                {'background': 'rgba(0,0,0,0.5)'}
            );


        }
    });

});

$('.counter').counterUp({
   delay: 5,
   time: 2000
});




