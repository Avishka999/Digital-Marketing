document.addEventListener("DOMContentLoaded", function() {
  // Existing fade animation with Intersection Observer
  const observerOptions = {
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with the fade-zoom class
  const animatedElements = document.querySelectorAll('.fade-zoom');
  animatedElements.forEach(el => observer.observe(el));

  // NEW: Mobile menu toggle functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
});
