$(document).ready(function(){

$('.owl-carousel.banner-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay:true,
    smartSpeed: 1000,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$(window).scroll(function () {

    if ($(document).scrollTop() > 50) {
        $(".top-nav-area").addClass("black");
    } else {
        $(".top-nav-area").removeClass("black");
    }

});


$('.mobile-bars').click(function () {

        $('.overylay-mobile .single-menu-item').addClass('animated fadeInLeft faster').show();
    });


    $('.mobile-cross').click(function () {

        $('.overylay-mobile .single-menu-item').removeClass('animated fadeInRight slow').hide();
    });

// fade effect div

    AOS.init({
        duration: 1000
    });

// end fade effect div

});

