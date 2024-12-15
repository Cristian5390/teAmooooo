document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const image3 = document.getElementById('image3');
    const brokenHeart = document.getElementById('brokenHeart');
    const audio = document.getElementById('audio');

    let currentImageIndex = 0;
    const images = [image1, image2, image3];
    let imageInterval;

    // Intentar reproducir el audio al cargar la página
    audio.play().catch(error => {
        console.error('Error al reproducir el audio:', error);
    });

    // Cambiar imágenes constantemente
    function startImageInterval() {
        imageInterval = setInterval(() => {
            images.forEach((img, index) => {
                img.style.display = index === currentImageIndex ? 'block' : 'none';
            });
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 1000);
    }

    startImageInterval();

    // Mover el botón "No" cuando se intenta hacer clic
    noButton.addEventListener('mouseover', () => {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    // Mostrar mensaje y reproducir música cuando se hace clic en "Sí"
    yesButton.addEventListener('click', () => {
        alert('no se que hacer para que me perdones eres mi ni ña bonita estoy muy mal que estes trsite por mi culpa perdoname por favor no quiero estemos mal quiero todo contigo 💔💔💔.');
        audio.play().catch(error => {
            console.error('Error al reproducir el audio:', error);
        });
        clearInterval(imageInterval);
        images.forEach((img, index) => {
            img.style.display = index === 0 ? 'block' : 'none';
        });
    });

    // Mostrar corazón roto cuando se hace clic en "No"
    noButton.addEventListener('click', () => {
        brokenHeart.style.display = 'block';
    });
});