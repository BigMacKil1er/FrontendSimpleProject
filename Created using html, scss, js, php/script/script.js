

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
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

// TYPED JS

const typed = new Typed('.multiple-text', {
    strings: ['Проектный менеджер!', 'Юрист!', 'Лидер!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// validate

const form = document.querySelector("form");
const telephone = document.querySelector('input[type="tel"]');
const inputmask = new Inputmask("+7 (999) 999-99-99");

inputmask.mask(telephone);

const validation = new JustValidate(".form");

validation
    .addField('.input-name', [
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Минимальная длина 3 символа'
        },
        {
            rule: 'maxLength',
            value: 50,
            errorMessage: 'Максимальная длина 50 символов'
        },
        {
            rule: 'required',
            value: true,
            errorMessage: 'Вы не ввели ваше имя/Название организации'
        }
    ])
    .addField('.input-email', [
        {
            rule: 'required',
            errorMessage: 'Email не введен.'
        },
        {
            rule: 'email',
            value: true,
            errorMessage: 'Не верный Email.'
        }
    ])
    .addField('.input-tel', [
        {
            rule: 'required',
            value: true,
            errorMessage: 'Введите номер телефона'
        },
        {
            rule: 'function',
            validator: function() {
                const phone = telephone.inputmask.unmaskedvalue();
                return phone.length === 10;
            },
            errorMessage: 'Введите корректный номер телефона.'

        }
    ]).onSuccess((event) => {
        console.log('Validation passes and form submitted', event);

        let formData = new FormData(event.target);


        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    alert('Ваше обращение зарегистрировано!');
                }
            }
        }

        xhr.open('POST', 'https://arsen-grigorian.ru/mail.php', true);
        xhr.send(formData);

        event.target.reset();
    })