const ape = document.getElementById("ape");
const message = document.getElementById("message");
const button = document.getElementById("move-ape-btn");

button.addEventListener("click", function() {
    const x = Math.floor(Math.random() * 300); // max 300px from left
    const y = Math.floor(Math.random() * 200); // max 200px from top
    ape.style.left = x + "px";
    ape.style.top = y + "px";
    message.textContent = `Ape moved to (${x}px, ${y}px)!`;
});
