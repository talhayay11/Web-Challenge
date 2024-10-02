const scrollToTopButton = document.getElementById('scrollUpBtn');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

$('#contactHeroSlider').carousel({
  interval: 3000, 
});

const darkModeButton = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
const mobileMenuToggleIcon = document.getElementById('mobileMenuToggleIcon');

const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  updateIcons();
};
  
const updateIcons = () => {
  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.src = 'images/moon-solid.png'; 
    darkModeIcon.alt = 'Dark Mode';
    mobileMenuToggleIcon.src = 'images/menu.png';
  } else {
    darkModeIcon.src = 'images/sun-regular.png'; 
    darkModeIcon.alt = 'Light Mode';
    mobileMenuToggleIcon.src = 'images/menu-black.png';
  }
};

const checkDarkMode = () => {
  const darkModeStatus = localStorage.getItem('darkMode');
  if (darkModeStatus === 'enabled') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  updateIcons();  
};

darkModeButton.addEventListener('click', toggleDarkMode);
darkModeToggleMobile.addEventListener('click', (toggleDarkMode) => {
  document.body.classList.toggle('dark-mode');
  mobileMenu.classList.remove('active');
  updateIcons();
});

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuButton = document.getElementById('closeMenu');

mobileMenuToggle.addEventListener('click', () => {
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
  } else {
    mobileMenu.classList.add('active');
  }
  updateIcons();
});

window.addEventListener('load', updateIcons);
window.addEventListener('load', checkDarkMode);

window.addEventListener('resize', () => {
  if (window.innerWidth > 1000) {
    mobileMenu.classList.remove('active');  
    mobileMenuToggle.style.display = 'none'; 
  } else {
    mobileMenuToggle.style.display = 'flex';
  }
  updateIcons();
});