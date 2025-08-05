const carrossels = document.querySelectorAll('.container-slide');
carrossels.forEach(container => {
  const slide = container.querySelector('.carousel-slide');
  const images = slide.querySelectorAll('.img-slides');
  const totalImages = images.length;
  let i = 0;
});

function updateSlide() {
    slide.style.transform = `translateX(-${i * 100}%)`;
}

document.addEventListener("click", (event) => {
    if (event.target.id === "next") {
        i = (i + 1) % totalImages;
        updateSlide();  
    }
});

document.addEventListener("click", (event) => {
    if (event.target.id === "prev") {
        i = (i - 1 + totalImages) % totalImages;
        updateSlide(); 
    }
});

// Auto avançar a cada 3 segundos dos slides

setInterval(() => {
    if (i == totalImages - 1) {
        i = 0;
    } else {
        i++;
    }
    updateSlide()
}, 5000);

// Auto avançar a cada 3 segundos do banner
const banner = document.getElementById("banner");
const img = banner.querySelectorAll(".img-banner");
const banner_img = img.length;
let j = 0;

function Banner() {
    banner.style.transform = `translateX(-${j * 100}%)`;
}

setInterval(() => {
    if (j == banner_img - 1) {
        j = 0;
    } else {
        j++;
    }
    Banner()
}, 3000);


//Icon "Favoritar" ação de click

selectContainer('linear-container');
selectContainer('lessfluid-linear-container');
selectContainer('fluid-linear-container');

function selectContainer(containerClasse) {
    const containers = document.querySelectorAll(`.${containerClasse}`);
    if (!containers.length) return;

    containers.forEach(container => {
        const favIcons = container.querySelectorAll('.fav_heart');

        favIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                if (icon.src.includes("/EixoAuto/img/Icons/heart.png")) {
                    icon.src = "/EixoAuto/img/Icons/heart-checked.png";
                } else {
                    icon.src = "/EixoAuto/img/Icons/heart.png";
                }
            });
        });
    });
}
