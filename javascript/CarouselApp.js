const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 9000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  // check for next slide
  if(current.nextElementSibling) {
    // Add current to next next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // remove current class
  current.classList.remove('current');
  // check for previous slide
  if(current.previousElementSibling) {
    // Add current to previous sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // add current to start
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
  nextSlide();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
});

// Auto slide
if(auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
