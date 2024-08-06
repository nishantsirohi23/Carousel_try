let carouselSlide = document.querySelector('.carousel-slides');
let images = document.querySelectorAll('.carousel-slides img');

let counter = 0;
const size = images[0].clientWidth + 20; // +20 for padding

function moveCarousel() {
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
    if (counter >= images.length / 2) { // looping back to the start
        setTimeout(() => {
            carouselSlide.style.transition = 'none';
            counter = 0;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }, 500); // wait for the transition to finish
    } else {
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    }
}

setInterval(moveCarousel, 2000);
