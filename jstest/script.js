
const monkey = document.getElementById("monkey");
const message = document.getElementById("message");
const button = document.getElementById("move-btn");

let x = 0;
let y = 50;


function moveMonkey() {
   
    x = Math.floor(Math.random() * 300); // 
    y = Math.floor(Math.random() * 100); // 


    monkey.style.left = x + "px";
    monkey.style.top = y + "px";


    message.textContent = `Monkey moved to (${x}px, ${y}px)!`;
}

button.addEventListener("click", moveMonkey);
