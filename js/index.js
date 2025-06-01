document.addEventListener('DOMContentLoaded', function() {
  // Initialize image carousel
  bulmaCarousel.attach('#results-carousel', {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  });

  // Initialize video carousel
  bulmaCarousel.attach('#video-carousel', {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    autoplay: false, // Don't autoplay videos
    pauseOnHover: true
  });
});
