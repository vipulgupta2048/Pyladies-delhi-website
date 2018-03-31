jQuery(window).load(function(){
    jQuery(".hameid-loader-overlay").delay(400).fadeOut('fast');
});
$(window).on("load resize", function(e){
    if($(window).width()<=768){
        $("#mainNav .nav-item").each(function(e){
            $(this).attr("data-toggle","collapse");
        });
    }else{
        $("#mainNav .nav-item").each(function(e){
            $(this).removeAttr("data-toggle");
        });
    }
});
$(window).on("load", function(){
    $(".leftbanner, .rightbanner").css("width", "0px");
    $(window).scrollTop(0);
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
$(document).ready(function() {
  var counter = 0;

  // Start the changing images
  setInterval(function() {
    if(counter == 9) {
      counter = 0;
    }

    changeImage(counter);
    counter++;
  }, 3000);

  // Set the percentage off
  loading();
});
/*
setTimeout(function () {
    document.getElementsByClassName("leftbanner")[0].style.width = "0px";
    document.getElementsByClassName("rightbanner")[0].style.width = "0px"
}, 1500);
*/

