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
