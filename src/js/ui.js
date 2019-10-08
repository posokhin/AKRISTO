//--------------------------------------------------------
//
//   @Author  : BRAVEART3D
//   @URL     : http://digitaldesign.sk/
//   @Envato  : https://themeforest.net/user/braveart3d
//   @Support : hotar@digitaldesign.sk
//
//---------------------------------------------------------

$(document).ready(function () {
    'use strict';

    //-----------------------------------------------------
    // Twitter Feed
    //-----------------------------------------------------
    $('.tweet-1').twittie({
        dateFormat: '%b. %d, %Y',
        template: '<div class="avatar">{{avatar}}</div>' +
        '<div class="twitter-box mt-2">{{screen_name}}</div>' +
        '<div class="content text-white mt-2">{{tweet}}</div>' +
        '<div class="date font-small mt-3 text-primary">{{date}}</div> ',
        count: 1,
        loadingText: 'Loading!',
        username: '@envato'
    });

    $('.tweet-2').twittie({
        dateFormat: '%b. %d, %Y',
        template: '<div class="avatar">{{avatar}}</div>' +
        '<div class="twitter-box mt-2">{{screen_name}}</div>' +
        '<div class="content text-white mt-2 font-small">{{tweet}}</div>' +
        '<div class="date text-primary font-small mt-3">{{date}}</div> ',
        count: 1,
        loadingText: 'Loading!',
        username: '@kajko_'
    });

    //-----------------------------------------------------
    // Countdown
    //-----------------------------------------------------
    $('#clock').countdown('2020/10/10').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<span>%-d days</span>'
            + '<span>%H hours</span> '
            + '<span>%M min</span>'
            + '<span>%S sec</span>'));
    });

    //-----------------------------------------------------
    // Testimonial slider
    //-----------------------------------------------------
    var sliderPrimary = new Swiper('.t-slider-primary', {
        pagination: '.p-primary',
        effect: 'slide',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    var sliderPink = new Swiper('.t-slider-pink', {
        pagination: '.p-pink',
        effect: 'slide',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    var sliderCustom = new Swiper('.t-slider-custom', {
        effect: 'slide',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    var sliderCustom2 = new Swiper('.t-slider-custom-2', {
        effect: 'slide',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    var slider2 = new Swiper('.t-slider-2', {
        paginationClickable: true,
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });
    var swiper3 = new Swiper('.t-slider-3', {
        pagination: '.p-custom',
        effect: 'flip',
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
    var swiperProduct = new Swiper('.product-slider', {
        pagination: '.p-custom',
        grabCursor: true,
        nextButton: '.black',
        prevButton: '.gold',
        hashNav: true,
    });
    var gallery = new Swiper('.gallery-slider', {
        pagination: '.swiper-pagination-white',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 50,
        grabCursor: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
    var gallery2 = new Swiper('.gallery-slider-2', {
        pagination: '.swiper-pagination-white',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 0,
        grabCursor: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
    var appGallery = new Swiper('.app-gallery', {
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 5,
        spaceBetween: 0,
        autoplay: 2500,
        centeredSlides: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    var appWatch = new Swiper('.app-watch', {
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 5,
        spaceBetween: 0,
        autoplay: 2500,
        centeredSlides: true,
        effect: 'fade',
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });
    //-----------------------------------------------------
    // Parallax SLider
    //-----------------------------------------------------
    var swiper = new Swiper('.parallax-slider-1', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 600,
        calculateHeight: true
    });
    //-----------------------------------------------------
    // Full Screen Slider
    //-----------------------------------------------------
    var fullscreen = new Swiper('.full-screen', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        centeredSlides: true,
        grabCursor: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        onSlideChangeStart: function (s) {
            $('.hero-background').attr('data-background', s.activeIndex);
        }
    });

    var fullscreenBg = new Swiper('.full-screen-bg', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        grabCursor: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false,
        onSlideChangeStart: function (s) {
            $('.slider-bg').attr('data-background', s.activeIndex);
        }
    });

    //-----------------------------------------------------
    // MailChimp
    //-----------------------------------------------------

    $('#mc-embedded-subscribe-form').ajaxChimp();

    //-----------------------------------------------------
    // Mailer Lite
    //-----------------------------------------------------
    function ml_webform_success_4432867() {
        var $ = ml_jQuery || jQuery;

        $('.ml-subscribe-form-4432867 .ml-block-success').show();
        $('.ml-subscribe-form-4432867 .ml-block-form').hide();
    };

    /*--------------------------------------------------------
     Animate Navbar
     -------------------------------------------------------*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.navbar-ui').addClass("nav-scroll");
        }
        else {
            $('.navbar-ui').removeClass("nav-scroll");
        }
    });

    var navbar = $('.navbar-classic');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            navbar.addClass("fixed-top");
        }
        else {
            navbar.removeClass("fixed-top");
        }
    });


    /*--------------------------------------------------------
     Tooltip
     -------------------------------------------------------*/
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });


    //----------------------------------------------------
    // Select Box
    //-----------------------------------------------------
    (function () {
        [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
            new SelectFx(el);
        });
    })();


    //-----------------------------------------------------
    // Ripple
    //-----------------------------------------------------
    var buttons = $('.btn-ripple');
    buttons.ripples();


    //-----------------------------------------------------
    // Scroll Animation
    //-----------------------------------------------------
    $(function () {
        $('.navbar-nav a[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});

