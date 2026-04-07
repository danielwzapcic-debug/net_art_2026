const monkey = document.getElementById("monkey");
const message = document.getElementById("message");
const button = document.getElementById("move-btn");

let x = 0;
let y = 50;

function randomColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
}

function moveMonkey() {
    x = Math.floor(Math.random() * 300);
    y = Math.floor(Math.random() * 150);
    monkey.style.left = x + "px";
    monkey.style.top = y + "px";
    document.body.style.backgroundColor = randomColor();
    message.textContent = `Monkey moved to (${x}px, ${y}px)!`;
}

button.addEventListener("click", moveMonkey);
