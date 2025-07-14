// Navbar JavaScript for mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');

  // Toggle mobile menu
  navbarToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
    navbarToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navbarMenu.classList.remove('active');
      navbarToggle.classList.remove('active');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNavbar = navbarToggle.contains(event.target) || navbarMenu.contains(event.target);
    
    if (!isClickInsideNavbar && navbarMenu.classList.contains('active')) {
      navbarMenu.classList.remove('active');
      navbarToggle.classList.remove('active');
    }
  });

  // Close mobile menu on window resize (if screen becomes larger)
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navbarMenu.classList.contains('active')) {
      navbarMenu.classList.remove('active');
      navbarToggle.classList.remove('active');
    }
  });
});
