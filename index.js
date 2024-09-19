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

// Masaüstü ve Mobil Dark Mode Butonları
const darkModeButton = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');

// Dark mode'u açıp kapatma fonksiyonu
const toggleDarkMode = () => {
  // Body'ye dark mode sınıfını ekleyip kaldırıyoruz
  document.body.classList.toggle('dark-mode');
  updateIcons();  // İkonları güncelle
};
  
const updateIcons = () => {
  // Dark mode aktifse ikonları değiştir
  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.src = 'images/moon-solid.png';  // Karanlık mod ikonu
    darkModeIcon.alt = 'Dark Mode';
  } else {
    darkModeIcon.src = 'images/sun-regular.png'; // Aydınlık mod ikonu
    darkModeIcon.alt = 'Light Mode';
  }
};

// Hem masaüstü hem de mobil butona tıklanıldığında dark mode'u değiştir
darkModeButton.addEventListener('click', toggleDarkMode);
darkModeToggleMobile.addEventListener('click', (toggleDarkMode) => {
  document.body.classList.toggle('dark-mode');
  mobileMenu.classList.remove('active'); // Dark mode açıldığında mobil menüyü kapat
});; // Mobil dark mode butonu

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
  if (mobileMenu.classList.contains('active')) {
    // Eğer menü aktifse, menüyü gizle
    mobileMenu.classList.remove('active');
  } else {
    // Eğer menü aktif değilse, menüyü göster
    mobileMenu.classList.add('active');
  }
});

window.addEventListener('load', updateIcons);

// Pencere boyutunu dinleme
window.addEventListener('resize', () => {
  if (window.innerWidth > 1000) {
    mobileMenu.classList.remove('active');  // Pencere genişliği 1000px'den fazla ise menüyü kapat
    mobileMenuToggle.style.display = 'none'; // Mobil menü butonunu gizle
  } else {
    mobileMenuToggle.style.display = 'flex'; // Mobil modda butonu tekrar göster
  }
  updateIcons();
});