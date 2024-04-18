// Select all elements with the class 'nav-link' and iterate over them using forEach
document.querySelectorAll('.nav-link').forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page');
    link.classList.add('active');
  }
});
