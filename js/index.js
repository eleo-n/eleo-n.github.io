document.addEventListener('DOMContentLoaded', function() {
  // Initialize carousels
  bulmaCarousel.attach('#results-carousel', {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  });
});
