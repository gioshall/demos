var myFullpage = new fullpage("#fullpage", {
    anchors: ["firstPage", "secondPage", "3rdPage"],
  
    // you can also use the HTML attribute data-tooltip on each section instead
    navigationTooltips: ["APLUS", "PARTNERS", "DEMO"],
    navigation: true,
  
    // Navigation for horizontal slides
    slidesNavigation: true,
  
    controlArrows: false,
  
  });
  
// === Reveal animations on scroll ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// === Typing effect on intro title ===
// const typeTarget = document.querySelector('.intro h1');
// if (typeTarget) {
//   typeTarget.classList.add('typing');
// }
