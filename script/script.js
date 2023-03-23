

// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections active link

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
// let some = document.querySelectorAll('header nav');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if((top >= offset) && top < (offset + height)) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
        
        //sticky navbar
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        //remove toggle icon and navbar when click navbar link(scroll)

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    })
}


// toggle education section


function showItem() {
    let hiddenElement = document.getElementById('education-wrapper');
    let unHiddenElement = document.getElementById('wrapper');
    hiddenElement.classList.toggle('education-wrapper');
    unHiddenElement.classList.toggle('wrapper-display-none')
}


//scroll reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .education-container, .experience-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'right' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

// TYPED JS

const typed = new Typed('.multiple-text', {
    strings: ['Проектный менеджер!', 'Юрист!', 'Лидер!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})