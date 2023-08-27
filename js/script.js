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

let toggleButtons = document.querySelectorAll('.toggle-button')

toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let navLinks = document.querySelectorAll('.nav-links')

        navLinks.forEach((navLink) => {
            navLink.classList.toggle('active');
        })
    })
})


const allRegiones = async () => {
    const response = await fetch('../js/data.json')
    const data = await response.json()

    const regionSelect = document.getElementById('regiones')
    const comunaSelect = document.getElementById('comuna')

    data.regiones.forEach(item => {
        const option = document.createElement('option')
        option.value = item.region
        option.text = item.region
        regionSelect.appendChild(option)
    });

    regionSelect.addEventListener('change', () => {
        const regionSelected = regionSelect.value
        const allComunas = data.regiones.find(region => region.region === regionSelected).comunas
        
        comunaSelect.innerHTML = '<option value="" disabled selected>Seleccione una comuna ...</option>'
        allComunas.forEach(comuna => {
            const option = document.createElement('option')
            option.value = comuna
            option.textContent = comuna
            comunaSelect.appendChild(option)
        })
    })
}

const body = document.getElementById('view_registro')
if (body) {
    allRegiones();
}