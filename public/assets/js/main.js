document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');
  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
  const form = document.querySelector('.contact-form');
  const status = document.querySelector('.form-status');
  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      status.textContent = 'Merci, votre message est prêt à partir. Nous revenons vers vous sous 48h.';
      form.reset();
    });
  }
});