const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.getElementById('year');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const navItems = document.querySelectorAll('.nav-links a');
const current = location.pathname.split('/').pop();
navItems.forEach((link) => {
  if (link.getAttribute('href') === current) {
    link.classList.add('active');
  }
});
