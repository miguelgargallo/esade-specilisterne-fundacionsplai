// 21. La información de los diferentes apartados será creada dinámicamente
// 17. Se implementará una galería de imágenes
window.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('gallery-container');

    const imagePaths = [
        './assets/js/image1.jpg',
        './assets/js/image2.jpg',
        './assets/js/image3.jpg'
    ];

    imagePaths.forEach(function (path) {
        const image = document.createElement('img');
        image.src = path;
        image.alt = 'Gallery Image';

        galleryContainer.appendChild(image);
    });

    const mainContent = document.querySelector('.main-content');
    mainContent.appendChild(galleryContainer);
});
