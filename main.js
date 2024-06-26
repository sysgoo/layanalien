let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-x')
    navbar.classList.toggle('active')

}


let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + hight) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    menuicon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
};

