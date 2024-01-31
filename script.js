
// code to add header footer in all pages ------------------------
$(function(){
  $("#header-container").load("header.html"); 
  $("#footer").load("footer.html"); 
});
// code to add header footer in all pages ------------------------


// navbar menu script ------------------------------------
function toggleMenu() {
  var navbar = document.getElementById('navbar');
  var body = document.body;
  navbar.classList.toggle('open');
  body.classList.toggle('menu-open');


  var burgerBars = document.querySelectorAll('.burger-bar');
  var crossBars = document.querySelectorAll('.cross-bar');

  burgerBars.forEach(bar => bar.classList.toggle('active'));
  crossBars.forEach(bar => bar.classList.toggle('active'));

}
// navbar menu script ------------------------------------

// testimonial card slider -------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const cardSlider = document.querySelector(".card-slider");

    let translateValue = 0;
    const cardWidth = document.querySelector(".card").offsetWidth;

    function showSlide() {
      cardSlider.style.transform = `translateX(${translateValue}px)`;
    }

    window.nextSlide = function () {
      translateValue -= cardWidth;
      if (translateValue < -cardWidth * (cardSlider.children.length - 1)) {
        translateValue = 0;
      }
      showSlide();
    };

    window.prevSlide = function () {
      translateValue += cardWidth;
      if (translateValue > 0) {
        translateValue = -cardWidth * (cardSlider.children.length - 1);
      }
      showSlide();
    };
  });

// testimonial card slider --------------------------------------------------------



  // navbar color change ---------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('header-container');
    const heroSection = document.querySelector('.about-hero-section');

    window.addEventListener('scroll', function () {
        // Get the scroll position
        const scrollPosition = window.scrollY;

        // Set the threshold for changing the navbar color (adjust as needed)
        const threshold = 400;

        // Calculate the opacity based on scroll position and threshold
        const opacity = Math.min(1, scrollPosition / threshold);

        // Change the navbar background color with opacity
        navbar.style.backgroundColor = `rgba(99, 0, 250, ${opacity})`;
    });
});

// navbar color change ---------------------------------------------------