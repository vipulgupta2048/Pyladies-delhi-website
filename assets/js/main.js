$(document).ready(function (e) {
    var primaryNav = $("#primaryNav");
    $(window).on("scroll", function (e) {
        checkNav();
    });
    $(".smooth-scroll").click(function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        requestAnimationFrame(function () {
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top - 90
            }, 1500, 'easeInOutExpo');
        });
    });
    $(window).on("resize", function (e) {
        checkResponsiveMenu();
    });

    function checkResponsiveMenu() {
        if ($(window).width() <= 768) {
            $("#mainNav").find("a.nav-link").attr("data-toggle", "collapse");
        } else {
            $("#mainNav").find("a.nav-link").removeAttr("data-toggle");
        }
    }

    function checkNav() {
        if ($(window).scrollTop() > $("#home").height()) {
            primaryNav.addClass("navbar-fixed-layout");
        } else {
            primaryNav.removeClass("navbar-fixed-layout");
        }
    }
    checkNav();
    checkResponsiveMenu();
});
$(window).on("load", function (e) {
    setTimeout(function () {
        setTimeout(function () {
            $("#preloader .content").fadeOut(500);
            setTimeout(function () {
                $("#preloader .bg-left, #preloader .bg-right").css("width", "0");
                setTimeout(function () {
                    $("#preloader").hide();
                }, 800);
            }, 1000);
        }, 1000);
    }, 1000);
});