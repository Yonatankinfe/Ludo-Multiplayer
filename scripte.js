document.querySelectorAll('.piece').forEach(piece => {
    piece.addEventListener('click', () => {
        const currentCircle = piece.parentElement;
        const section = currentCircle.parentElement;
        const circles = section.querySelectorAll('.circle');

        // Find the next empty spot
        for (let i = 0; i < circles.length; i++) {
            if (!circles[i].querySelector('.piece')) {
                circles[i].appendChild(piece);
                break;
            }
        }
    });
});
