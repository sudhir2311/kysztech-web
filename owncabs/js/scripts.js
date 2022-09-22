"use strict";

/* For All */

$('nav .search input[type="submit"]').on('click', function (e) {
    e.preventDefault();
    $('nav .search').slideToggle(100);
});

$('nav .search-button').on('click',function (e) {
    e.preventDefault();
    $('nav .search').slideToggle(100);
});

/* Call Us */

$('#call-us .selected span').on('click',function() {
    $('#call-us .selected ul').slideToggle();
});

$('#call-us .selected li').on('click',function () {
    $('#call-us .selected span').text($(this).text());
    $('#call-us .number').text($(this).attr('data-num'));

    /* Close*/
    $('#call-us .selected ul').slideToggle();
});

/* Nav For Mobiles */
$('nav .mobile-button').on('click',function () {
    $('nav .mobile-menu').slideToggle();
});
$('nav .mobile-menu > li a').on('click',function(e) {
    $(this).parent('li').find('.second').slideToggle();
});
$('nav .mobile-menu .second > li a').on('click',function(e) {
    $(this).parent('li').find('.third').slideToggle();
});


/* Home */

function initHome() {

    $('#form-type a').on('click',function(e) {
        e.preventDefault();

        $('#form-type a').removeClass('checked');
        $(this).addClass('checked');
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false
    });

}

/* Booking */

function initBooking() {

    $('#book-nav li').on('click',function() {
        $('#book-nav li').removeClass('active');
        $(this).addClass('active');
        $('#book-content li').removeClass('visible');
        var find = '#book-content .' + $(this).attr('data-attr');
        $(find).addClass('visible');
    });

}

/* About */

function initAbout() {
    $('.team-slider').flexslider({
        animation: "slide",
        controlNav: false
    });
}