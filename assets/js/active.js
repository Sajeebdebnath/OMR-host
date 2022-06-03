$(document).ready(function () {
  $(".hero-slider-wrapper").owlCarousel({
    loop: true,
    nav: true,
    autoPlay: true,
    items: 1,
    dots: false,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
  })
})

// $(document).ready(function () {
//     $(".hero-slider-wrapper").owlCarousel({
//       loop: true,
//       margin: 60,
//       responsiveClass: true,
//       nav: true,
//       autoPlay: true,
//       items: 1,
//       dotsEach: true,
//       navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
//       responsive: {
//         0: {
//           items: 1,
//         },
//         600: {
//           items: 1,
//         },
//         1000: {
//           items: 2,
//         },
//       },
//     })
//   })
