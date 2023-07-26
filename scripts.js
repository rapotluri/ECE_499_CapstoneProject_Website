// scripts.js

// Play videos together in a 2x2 panel
function playVideosTogether() {
  const videos = document.querySelectorAll('#videos video');
  videos.forEach((video) => video.play());
}

// Stop videos when leaving the page
window.addEventListener('beforeunload', () => {
  const videos = document.querySelectorAll('#videos video');
  videos.forEach((video) => video.pause());
});


// Get the navbar element
const navbar = document.querySelector('.navbar');

// Function to add or remove the 'navbar-fixed' class based on scroll position
function toggleNavbarFixed() {
    if (window.pageYOffset > 0) { // Adjust the value (10) to control when the navbar becomes fixed
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
}

// JavaScript function to smoothly scroll to the target section
function smoothScroll(target) {
  const element = document.getElementById(target);
  const navbarHeight = 70; // Replace with the actual height of your navbar

  // Get the bounding rect of the target element relative to the viewport
  const elementRect = element.getBoundingClientRect();

  // Calculate the position to scroll to, taking into account the navbar height
  const offsetPosition = elementRect.top + window.scrollY - navbarHeight;

  // Scroll to the target element smoothly
  window.scroll({
    top: offsetPosition,
    behavior: 'smooth',
  });

  // Prevent default link behavior
  event.preventDefault();
}




