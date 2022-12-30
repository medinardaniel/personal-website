const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const navbar = document.querySelector('.navbar');

let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
const currentScrollPos = window.scrollY;

if (currentScrollPos < prevScrollPos) {
    // User is scrolling up
    if (navbar.classList.contains('hidden')) {
    navbar.classList.remove('hidden');
    }
} else {
    // User is scrolling down
    navbar.classList.add('hidden');
}

prevScrollPos = currentScrollPos;
});
  