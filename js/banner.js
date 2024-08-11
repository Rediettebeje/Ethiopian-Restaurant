const bannerImages = ['Preview1.png', 'Preview2.png', 'Preview3.png'];
const headerElement = document.querySelector('.header');

let currentIndex = 0;

function changeHeaderBackground() {
    const imageUrl = `url('../images/${bannerImages[currentIndex]}')`;
    console.log("Header element:", headerElement);
    console.log("New background image URL:", imageUrl);
    headerElement.style.backgroundImage = imageUrl;
    currentIndex = (currentIndex + 1) % bannerImages.length;
}

setInterval(changeHeaderBackground, 3000);
