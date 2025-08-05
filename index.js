
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  } else {
    console.error('Hamburger or navLinks element not found.');
  }
});


// about--section

// Fade-in effect on scroll
window.addEventListener("scroll", () => {
  const aboutSection = document.querySelector(".about-section");
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (sectionTop < screenPosition) {
    aboutSection.classList.add("visible");
  }
});


// Fade in About section on scroll
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector('.about-section');

  const revealOnScroll = () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      aboutSection.style.opacity = 1;
    }
  };

  window.addEventListener('scroll', revealOnScroll);
});

// PROJECT--SECTION
