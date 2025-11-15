$(document).ready(function () {
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
    dots: true,
    smartSpeed: 3000,
    mouseDrag: false,
    touchDrag: false,
  });

  const $underline = $(".tab-underline");
  const $firstTab = $(".tab-btn.active");
  moveUnderline($firstTab);

  $(".tab-btn").click(function () {
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");
    moveUnderline($(this));

    const tabId = $(this).data("tab");
    $(".tab-panel").removeClass("active");
    $("#" + tabId).addClass("active");
  });

  function moveUnderline($tab) {
    const left = $tab.position().left;
    const width = $tab.outerWidth();
    $underline.css({ left: left, width: width });
  }

  let started = false;

  function animateCounters() {
    $(".count-num").each(function () {
      let $this = $(this);
      let countTo = parseInt($this.attr("data-count"));
      $({ countNum: 0 }).animate(
        { countNum: countTo },
        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  }

  $(window).on("scroll", function () {
    let sectionTop = $("#counter").offset().top;
    let scrollBottom = $(window).scrollTop() + $(window).height();

    if (!started && scrollBottom > sectionTop) {
      animateCounters();
      started = true;
    }
  });

  // Initialize Owl Carousel
  $(".gallery-slider").owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });

  // Lightbox (Zoom effect)
  $(".gallery-item img").on("click", function () {
    const src = $(this).attr("src");
    $(".lightbox-img").attr("src", src);
    $("#lightbox").fadeIn();
  });

  // Close lightbox
  $(".close, #lightbox").on("click", function (e) {
    if (e.target !== $(".lightbox-img")[0]) {
      $("#lightbox").fadeOut();
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#backToTop").fadeIn();
    } else {
      $("#backToTop").fadeOut();
    }
  });

  // Smooth Scroll to Top
  $("#backToTop").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  
});
