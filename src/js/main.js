$(document).ready(function(){
    $('.header__burger').on('click', function(){
        $('.header__m-menu').slideDown();
    });
    $('.header__m-menu .close').on('click', function(){
        $('.header__m-menu').fadeOut();
    });

    $("a[href^='#']").on('click', function(e){
        e.preventDefault();

        var href = $(this).attr('href');

        $('.header__m-menu').fadeOut();

        $("html, body").animate({
            scrollTop: $(href).offset().top+'px'
        },1000);
    });


    /* show more text about */
    $('.about .more').on('click', function(e){
        e.preventDefault();
        $('.about__left').addClass('full');
    });

    /* slider popap-products */
    $('.popap__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: $('.c-slick-prev'),
        nextArrow: $('.c-slick-next')
    });
    
    /* popap open */
    $('.products__link').on('click', function(e){
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.popap').css('display', 'flex').fadeIn();
        $('.popap__list').slick('setPosition');
    });
    
    $('.popap .close').on('click', function(e){
        e.preventDefault();
        $('.overlay').fadeOut();
        $('.popap').fadeOut();
    });

    /* popap btn click */
    $('.popap__right__btn').on('click', function(e){
        $('.overlay').fadeOut();
        $('.popap').fadeOut();
    });

    /* forms */

    var phoneMask = IMask(
        document.getElementById('spec-phone'), {
            mask: '+{7}(000)000-00-00'
        });
    var phoneMask = IMask(
        document.getElementById('feed-phone'), {
            mask: '+{7}(000)000-00-00'
        });
    var phoneMask = IMask(
        document.getElementById('back-call-phone'), {
            mask: '+{7}(000)000-00-00'
        });

    function validEmail(value){
        var pattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/ig;
        return pattern.test(value);
    }

    var specialForm = document.querySelector('.special__form');

    specialForm.addEventListener('submit', function(e){
        e.preventDefault();

        var email = specialForm.querySelector('#spec-email');
        var name = specialForm.querySelector('#spec-name');
        var phone = specialForm.querySelector('#spec-phone');

        var valid = 0;

        if(!validEmail(email.value)){
            email.parentElement.querySelector('span').style.display = 'block';
            valid++;
        }
        else{
            email.parentElement.querySelector('span').style.display = 'none';
        }

        if(name.value == ""){
            name.parentElement.querySelector('span').style.display = 'block';
            valid++;
        }
        else{
            name.parentElement.querySelector('span').style.display = 'none';
        }

        if(phone.value.length < 16){
            phone.parentElement.querySelector('span').style.display = 'block';
            valid++;
        }
        else{
            phone.parentElement.querySelector('span').style.display = 'none';
        }

        if(valid == 0){
            $('.overlay').fadeIn();
            $('.send-ok:not(.send-ok-back-call)').fadeIn();
        }
    });

    $('.send-ok .close').on('click', function(){
        $('.overlay').fadeOut();
        $('.send-ok').fadeOut();      
    });

    var feedBackForm = document.querySelector('.feedback__form');

    feedBackForm.addEventListener('submit', function(e){
        e.preventDefault();
        var email = feedBackForm.querySelector('#feed-email');
        var name = feedBackForm.querySelector('#feed-name');
        var phone = feedBackForm.querySelector('#feed-phone');
        var valid = 0;

        if(!validEmail(email.value)){
            email.parentElement.querySelector('span').style.display = 'block';
            valid++;
        }
        else{
            email.parentElement.querySelector('span').style.display = 'none';
        }

        if(name.value == ""){
            name.parentElement.querySelector('span').style.display = 'block';
            valid++;
        }
        else{
            name.parentElement.querySelector('span').style.display = 'none'; 
        }

        if(phone.value.length < 16){
            phone.parentElement.querySelector('span').style.display = 'block';
            valid++;
        }
        else{
            phone.parentElement.querySelector('span').style.display = 'none'; 
        }

        if(valid == 0){
            $('.overlay').fadeIn();
            $('.send-ok').fadeIn();
        }
    });
    /* forms end */


    /* back-call */
    $('.header__btn-phone').on('click', function(e){
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.back-call').fadeIn();
    });

    $('.back-call .close').on('click', function(){
        $('.overlay').fadeOut();
        $('.back-call').fadeOut();
    });

    var backCallForm = document.querySelector('.back-call__form');
    backCallForm.addEventListener('submit', function(e){
        e.preventDefault();
        var phone = backCallForm.querySelector('#back-call-phone');

        if(phone.value.length < 16){
            phone.nextElementSibling.style.display = 'block';
        }
        else{
            phone.nextElementSibling.style.display = 'none';
            $('.back-call').fadeOut();
            $('.send-ok-back-call').fadeIn();
        }
    });
    /* back-call end */


    /* privacy popap */
    $('.js-privacy').on('click', function(e){
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.privacy').fadeIn();
    });
    $('.privacy .close').on('click', function(e){
        e.preventDefault();
        $('.overlay').fadeOut();
        $('.privacy').fadeOut();
    });

});