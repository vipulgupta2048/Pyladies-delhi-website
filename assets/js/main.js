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

function changeImage(counter) {
  var images = [
    '<i class="fa fa-fighter-jet"></i>',
    '<i class="fa fa-gamepad"></i>',
    '<i class="fa fa-headphones"></i>',
    '<i class="fa fa-cubes"></i>',
    '<i class="fa fa-paw"></i>',
    '<i class="fa fa-rocket"></i>',
    '<i class="fa fa-ticket"></i>',
    '<i class="fa fa-pie-chart"></i>',
    '<i class="fa fa-codepen"></i>'
  ];

  $(".loader .image").html(""+ images[counter] +"");
}




/*
setTimeout(function () {
    document.getElementsByClassName("leftbanner")[0].style.width = "0px";
    document.getElementsByClassName("rightbanner")[0].style.width = "0px"
}, 1500);
*/
