$(document).ready(function () {
    $(".testimonial-items-").owlCarousel({
      loop: true,
      margin: 60,
      responsiveClass: true,
      nav: true,
      autoPlay: true,
      items: 2,
      dotsEach: true,
      navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    })
  })