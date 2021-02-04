const swapTemplate = () => {
  const aboutSection = document.getElementById('about');
  const menuSection = document.getElementById('menu');
  const menuSelector = document.querySelector('.menuSelector');
  const aboutSelector = document.querySelector('.aboutSelector');


  menuSelector.addEventListener('click', () => {
    aboutSection.classList.toggle('nav-deactive');
    menuSection.classList.toggle('nav-deactive');
  });

  aboutSelector.addEventListener('click', () => {
    aboutSection.classList.toggle('nav-deactive');
    menuSection.classList.toggle('nav-deactive');
  })
}

swapTemplate();
