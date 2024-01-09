function typeWriter(text, elementId, speed) {
    let index = 0;
    function type() {
        if (index < text.length) {
            document.getElementById(elementId).innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

function fadeIn(elementId) {
    const element = document.getElementById(elementId);
    element.style.opacity = 0;
    let opacity = 0;

    function fade() {
        opacity += 0.01;
        element.style.opacity = opacity;

        if (opacity < 1) {
            requestAnimationFrame(fade);
        }
    }
    fade();
}
