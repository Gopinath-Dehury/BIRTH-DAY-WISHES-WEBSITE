let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName('slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 1500); // Change slide every 1.5 seconds
}

document.addEventListener('DOMContentLoaded', showSlides);
document.querySelector('.play-button').addEventListener('click', () => {
    const audio = document.getElementById('birthday-audio');
    audio.play();
  });
  