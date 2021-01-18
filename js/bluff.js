$(document).ready(function() {

    // Properly position the "go-to" anchor scroll for lower screen widths
    if ((screen.width < 991)) {
        $('a.anchor').click(function(){
            $('html, body').animate({
                scrollTop: $($(this).attr('href') ).offset().top -250
            }, 800);
        });
    }
    else {

        $('a.anchor').click(function(){
            $('html, body').animate({
                scrollTop: $($(this).attr('href') ).offset().top -1
            }, 800);
        });
    }



    // Partner brands slider
    $('.partner_brands_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 390,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Team Members slider
    $('.team_slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },

        ]
    });


    // Gallery Slider + Lightbox
    let gallerySlider = $('.bluffs_gallery_slider');
    $(gallerySlider).slick({
        dots: false,
        autoplay: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $(gallerySlider).slickLightbox({
        itemSelector: 'a',
        navigateByKeyboard: true,
        background: 'rgba(0,0,0,.93)'
    });


    // Subtle fade-in animation for the below-mentioned elements
    ScrollReveal().reveal('.about_image_holder', {delay: 300});
    ScrollReveal().reveal('.dorado', {delay: 500, duration: 1400});
    ScrollReveal().reveal('.crab', {delay: 500, duration: 1400});
    ScrollReveal().reveal('.grouper', {delay: 500, duration: 1400});
    ScrollReveal().reveal('.hogfish', {delay: 500, duration: 1400});
    ScrollReveal().reveal('.gamefish', {delay: 500, duration: 1400});
    ScrollReveal().reveal('.productbox', {delay: 150});
    ScrollReveal().reveal('.servicebox', {delay: 300});
    ScrollReveal().reveal('.map_holder', {delay: 300});
    ScrollReveal().reveal('.bluffs_contact_form', {delay: 300});


    // Close the collapse navbar after a menu link is clicked
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        $('.navbar-toggler-icon').toggleClass('colorfuse');
    });

    // Fancy animation for hamburger menu
    $('.bluffs_nav_toggler').on('click', function(){
        $('.animated-icon1').toggleClass('open');
    });


});