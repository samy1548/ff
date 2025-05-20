document.addEventListener('DOMContentLoaded', function() {
    const carruselInner = document.querySelector('.carrusel-inner');
    const carruselItems = document.querySelectorAll('.carrusel-item');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carruselItems.length;
        updateCarrusel();
    }

    function updateCarrusel() {
        carruselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos
});
