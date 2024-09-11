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


document.getElementById('darkModeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode'); // Body'e dark-mode class'ını ekle/çıkar
});

