document.addEventListener("DOMContentLoaded", function() {
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
  
    // Observe elements with fade-zoom (or fade-in-left, fade-in-right, etc.)
    const animatedElements = document.querySelectorAll('.fade-zoom');
    animatedElements.forEach(el => observer.observe(el));
  });
  