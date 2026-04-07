const monkey = document.getElementById("monkey");
const message = document.getElementById("message");
const button = document.getElementById("move-btn");

let x = 0;
let y = 50;

function randomColorStep(currentColor) {
    let color = currentColor.match(/\d+/g).map(Number);
    color = color.map(c => {
        c += Math.floor(Math.random() * 21) - 10; // ±10 per channel
        return Math.max(0, Math.min(255, c));
    });
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

function moveMonkey() {
    x = Math.floor(Math.random() * 300);
    y = Math.floor(Math.random() * 150);
    monkey.style.left = x + "px";
    monkey.style.top = y + "px";

    const scale = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
    const rotate = Math.floor(Math.random() * 60) - 30; // -30 to +30 degrees
    monkey.style.transform = `scale(${scale}) rotate(${rotate}deg)`;

    const currentColor = getComputedStyle(document.body).backgroundColor;
    document.body.style.backgroundColor = randomColorStep(currentColor);

    message.textContent = `Monkey moved to (${x}px, ${y}px)!`;
}

button.addEventListener("click", moveMonkey);
