$(window).on("load", function(){
    $(".leftbanner, .rightbanner").css("width", "0px");
});
$(document).ready(function(e){
    var primaryNav = $("#primaryNav");
    $(window).on("scroll", function(e){
        if($(this).scrollTop() != 0){
            primaryNav.addClass("navbar-fixed-layout");
        }else{
            primaryNav.removeClass("navbar-fixed-layout");
        }
    });
});


/*
setTimeout(function () {
    document.getElementsByClassName("leftbanner")[0].style.width = "0px";
    document.getElementsByClassName("rightbanner")[0].style.width = "0px"
}, 1500);
*/
