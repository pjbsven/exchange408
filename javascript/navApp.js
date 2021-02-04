const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    //toggle Nav
    nav.classList.toggle('nav-active');
    //burger animation
    burger.classList.toggle('toggle');

  });

  nav.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.toggle('toggle');
  });
}

navSlide();
