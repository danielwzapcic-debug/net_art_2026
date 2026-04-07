const ape = document.getElementById("ape");
const message = document.getElementById("message");
const button = document.getElementById("move-ape-btn");

button.addEventListener("click", function() {
    const x = Math.floor(Math.random() * 300);
    const y = Math.floor(Math.random() * 200);
    ape.style.left = x + "px";
    ape.style.top = y + "px";
    message.textContent = `Ape moved to (${x}px, ${y}px)!`;
});
