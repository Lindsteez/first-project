// script för darkmode
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");

  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "light");
    } else {
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  });
});

let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlide(slideIndex);
}

showSlide(slideIndex);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const items = document.querySelectorAll('.timeline-item');
items.forEach(item => observer.observe(item));

document.querySelectorAll('.flip-box').forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('flipped');
  });
});

window.onscroll = function() {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Scrolla till toppen när man klickar
  document.getElementById("scrollTopBtn").onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };