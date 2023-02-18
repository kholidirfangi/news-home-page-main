const iconMenu = document.querySelector('.icon-menu');
const iconClose = document.querySelector('.icon-close');
// Get the container element
const nav = document.querySelector('nav');

iconMenu.addEventListener('click', function () {
  nav.style.right = '0';
  nav.style.animation = 'open 1s';
});

iconClose.addEventListener('click', function () {
  nav.style.right = '-250px';
  nav.style.animation = 'close 1s';
});


const btns = document.querySelectorAll('.navlink');

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const active = document.querySelector('.active');
    if (active) active.classList.remove('active');
    e.target.classList.add('active');
  });
});
