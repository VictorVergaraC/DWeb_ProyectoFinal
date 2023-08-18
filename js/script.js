AOS.init();

let toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let navLinks = document.querySelectorAll('.nav-links');

        navLinks.forEach((navLink) => {
            navLink.classList.toggle('active');
        });
    });
});