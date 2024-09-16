// Scroll-up butonunu seç
const scrollToTopButton = document.getElementById('scrollUpBtn');

// Scroll olduğunda butonu göster/gizle
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

// Scroll-up butonuna tıklandığında sayfanın en üstüne git
scrollToTopButton.addEventListener('click', function() {
  document.body.scrollTop = 0; // Safari için
  document.documentElement.scrollTop = 0; // Diğer tarayıcılar için
});


const darkModeButton = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');

// Dark mode'u açıp kapatma fonksiyonu
const toggleDarkMode = () => {
  // Body'ye dark mode sınıfını ekleyip kaldırıyoruz
  document.body.classList.toggle('dark-mode');
  
  // Dark mode aktifse ikonları değiştir
  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.src = 'images/moon-solid.png';  // Karanlık mod ikonu
    darkModeIcon.alt = 'Dark Mode';
  } else {
    darkModeIcon.src = 'images/sun-regular.png'; // Aydınlık mod ikonu
    darkModeIcon.alt = 'Light Mode';
  }
};
// Butona tıklayınca dark mode'u değiştir
darkModeButton.addEventListener('click', toggleDarkMode);


// Bootstrap sliderı otomatik oynatma için interval belirle
$('#contactHeroSlider').carousel({
  interval: 3000, // 3 saniye
  ride: 'carousel'
});


// Mobil Menü Elemanları
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenuButton = document.getElementById('closeMenu');

// Menü Açma/Kapatma
mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');  // Menüyü göster
});

closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active');  // Menüyü gizle
});


// Dark Mode fonksiyonu
const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
darkModeToggleMobile.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});