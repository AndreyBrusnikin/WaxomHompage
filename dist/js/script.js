$('#toggle-search').on('click', function() {
    $('#searchBar').toggle('display: inline-block');
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
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