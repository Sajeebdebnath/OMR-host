//Sticky Navigation
window.onscroll = function () {
  stickyNavigation()
}

var navbar = document.querySelector(".header-bottom-area")
var sticky = navbar.offsetTop

function stickyNavigation() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Hero Slider
$(document).ready(function () {
  $(".hero-slider-wrapper").owlCarousel({
    loop: true,
    nav: true,
    autoPlay: true,
    items: 1,
    dots: false,
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
  })

  //Testimonial Slider
  $(".testonial-items-wrapper").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoPlay: true,
    items: 3,
    dots: false,
    navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  })
})
