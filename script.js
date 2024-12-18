document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "1.png",
        "12.png",
        "11.png",
        "10.png",
        "9.png",
        "8.png",
        "7.png",
        "6.png",
        "5.png",
        "4.png",
        "3.png",
        "2.png",
        // Adicione mais imagens aqui
    ];

    let currentIndex = 0;
    const centeredImage = document.querySelector(".centered-image");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const imageUrl = images[currentIndex];
        centeredImage.src = imageUrl;
    }

    // Inicializa a troca de imagem a cada 5 segundos
    setInterval(changeImage, 5000);

    // Carrega a primeira imagem
    changeImage();
});
