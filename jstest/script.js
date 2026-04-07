const ape = document.getElementById("ape");
const message = document.getElementById("message");
const button = document.getElementById("move-ape-btn");

function randomColorStep(currentColor) {
    const color = currentColor.match(/\d+/g).map(Number);
    const newColor = color.map(c => {
        c += Math.floor(Math.random() * 21) - 10;
        return Math.max(0, Math.min(255, c));
    });
    return `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
}

function moveApe() {
    const x = Math.floor(Math.random() * 300);
    const y = Math.floor(Math.random() * 150);
    ape.style.left = x + "px";
    ape.style.top = y + "px";

    const scale = 0.8 + Math.random() * 0.4; 
    const rotate = Math.floor(Math.random() * 60) - 30; 
    ape.style.transform = `scale(${scale}) rotate(${rotate}deg)`;

    const currentColor = getComputedStyle(document.body).backgroundColor;
    document.body.style.backgroundColor = randomColorStep(currentColor);

    message.textContent = `Ape moved to (${x}px, ${y}px)!`;
}

button.addEventListener("click", moveApe);
