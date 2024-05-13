document.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelector('.slides');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let slideIndex = 0;
    let slidesWidth = document.querySelector('.slide').offsetWidth;
    let totalSlides = document.querySelectorAll('.slide').length;

    nextBtn.addEventListener('click', () => {
        slideIndex++;
        showSlides();
    });

    prevBtn.addEventListener('click', () => {
        slideIndex--;
        showSlides();
    });

    function showSlides() {
        // Verifica se o slideIndex é a primeira posição
        if (slideIndex == -1) {
            // se é, então define o slideIndex para o último slide
            slideIndex = totalSlides - 2;
        }

        // Verifica se o slideIndex é a última posição
        if (slideIndex >= totalSlides - 1) {
            // se é, então define o slideIndex para o primeiro slide
            slideIndex = 0;
        }

        // Calcula a posição baseada no slideIndex
        let position = -(slidesWidth * slideIndex);

        slides.style.transition = 'transform 0.5s ease';
        slides.style.transform = `translateX(${position}px)`;

    }
})
