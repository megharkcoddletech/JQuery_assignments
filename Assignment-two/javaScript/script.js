$(document).ready(function () {
    $('.bullets1').click(function () {
        let current = $('.active');
        current.removeClass('active');
        let img = $('.images1');
        img.addClass('active');
    });
    $('.bullets2').click(function () {
        let current = $('.active');
        current.removeClass('active');
        let img = $('.images2');
        img.addClass('active');
    });
    $('.bullets3').click(function () {
        let current = $('.active');
        current.removeClass('active');
        let img = $('.images3');
        img.addClass('active');
    });
    $('.bullets4').click(function () {
        let current = $('.active');
        current.removeClass('active');
        let img = $('.images4');
        img.addClass('active');

    });
    $('.bullets5').click(function () {
        let current = $('.active');
        current.removeClass('active');
        let img = $('.images5');
        img.addClass('active');
    });

    setInterval(function () {
        let current = $('.active');
        let next = current.next();
        if (next.length) {
            current.removeClass('active');
            next.addClass('active');
        } else {
            current.removeClass('active');
            $('.images:first-child').addClass('active');
        }
    }, 3000);
});

