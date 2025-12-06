document.addEventListener("DOMContentLoaded", function() {

    const track = document.querySelector(".slider-track");
    const nextBtn = document.querySelector(".btn-next");
    const prevBtn = document.querySelector(".btn-prev");
    const cards = document.querySelectorAll(".review-img");
    const shadow = document.getElementById("shadowCard");

    let index = 0;
    const cardWidth = 541 + 40; // width + gap
    const total = cards.length;

    function updateSlider() {
        track.style.transform = `translateX(-${index * cardWidth}px)`;
        let shadowIndex = (index + 1) % total;
        shadow.src = cards[shadowIndex].src;
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % total;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + total) % total;
        updateSlider();
    });

});