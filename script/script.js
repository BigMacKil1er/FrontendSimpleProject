let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let some = document.querySelectorAll('header nav');

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
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.screenY > 100);
    })
}

function showItem() {
    let hiddenElement = document.getElementById('education-wrapper');
    hiddenElement.classList.toggle('education-wrapper');
}