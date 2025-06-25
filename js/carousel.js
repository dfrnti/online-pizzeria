let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides; 
    const offset = -currentSlide * 100; 
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    updateStatus();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function updateStatus() {
    document.getElementById('status').innerText = `${currentSlide + 1} / ${totalSlides}`;
}

updateStatus();
