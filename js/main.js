/* ============================================================
   RIDWAN POLY WIZARD — SHARED SITE BEHAVIOR
   Loaded on every page. Page-specific logic lives in work.js.
   ============================================================ */

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // close menu after choosing a link (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Highlight the current page in the nav (each nav link carries data-page)
const currentPage = document.body.dataset.page;
document.querySelectorAll('.nav-btn[data-page]').forEach(link => {
  if (link.dataset.page === currentPage) link.classList.add('active');
});

// Homepage hero cube: hover to switch wireframe -> shaded
const cubeStage = document.getElementById('cubeStage');
if (cubeStage) {
  cubeStage.addEventListener('mouseenter', () => cubeStage.classList.add('shaded'));
  cubeStage.addEventListener('mouseleave', () => cubeStage.classList.remove('shaded'));
  // touch devices: tap to toggle
  cubeStage.addEventListener('touchstart', () => cubeStage.classList.toggle('shaded'), { passive: true });
}

// Contact form (static hosting has no backend — swap this handler for
// your form endpoint, e.g. Formspree, Netlify Forms, or your own API)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.reset();
    document.getElementById('formNote').style.display = 'block';
  });
}
