$(document).ready(function(){
  $("#menubtn").click(function () {
    // If #mobiledetail is visible, close it first
    if ($("#mobiledetail").is(":visible")) {
      $("#mobiledetail")
        .stop(true, true)
        .animate({ width: "toggle", opacity: "toggle" }, 400, function () {
          // After mobiledetail closes, open navmobile
          $("#navmobile")
            .stop(true, true)
            .animate({ width: "toggle", opacity: "toggle" }, 500);
        });
    } else {
      // Otherwise, just toggle navmobile
      $("#navmobile")
        .stop(true, true)
        .animate({ width: "toggle", opacity: "toggle" }, 500);
    }
  });

  $("#sidebtn").click(function () {
    // If #navmobile is visible, close it first
    if ($("#navmobile").is(":visible")) {
      $("#navmobile")
        .stop(true, true)
        .animate({ width: "toggle", opacity: "toggle" }, 400, function () {
          // After navmobile closes, open mobiledetail
          $("#mobiledetail")
            .stop(true, true)
            .animate({ width: "toggle", opacity: "toggle" }, 500);
        });
    } else {
      // Otherwise, just toggle mobiledetail
      $("#mobiledetail")
        .stop(true, true)
        .animate({ width: "toggle", opacity: "toggle" }, 500);
    }
  });
  $(".vertical-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    animateOut: "fadeOut",
    autoplayTimeout: 4000,
    dots:true,
    smartSpeed: 3000,
    mouseDrag: false,
    touchDrag: false,
  });
})