jQuery(window).load(function(){
    jQuery(".hameid-loader-overlay").delay(400).fadeOut('fast');
});

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
