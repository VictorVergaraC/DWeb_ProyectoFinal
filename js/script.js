document.addEventListener("DOMContentLoaded", function () {
    const acordionItems = document.querySelectorAll(".acordion-item")

    if (acordionItems) {
        acordionItems.forEach((item) => {
            const header = item.querySelector(".acordion-header")
            const content = item.querySelector(".acordion-content")

            header.addEventListener("click", () => {
                item.classList.toggle("active");

                if (item.classList.contains("active")) {
                    content.style.maxHeight = content.scrollHeight + "px"
                } else {
                    content.style.maxHeight = "0"
                }
            });

            if (window.innerWidth <= 768) {
                content.style.maxHeight = "0"
            }
        })
    }

    const carouselContainer = document.querySelector(".carrusel-container");
    if (carouselContainer) {
        let currentIndex = 0;
        const interval = 5000;

        const mover = (index) => {
            currentIndex = index;
            const translateX = -currentIndex * (100 / 3);
            carouselContainer.style.transform = `translateX(${translateX}%)`;
        }

        const siguienteItem = () => {
            currentIndex = (currentIndex + 1) % (carouselContainer.children.length - 2);
            mover(currentIndex);
        }

        setInterval(siguienteItem, interval);
    }

})

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