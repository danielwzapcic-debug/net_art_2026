const moveBtn = document.getElementById('moveBtn');
const jumpBtn = document.getElementById('jumpBtn');
const ape = document.getElementById('ape');

let isMovingRight = false;
let isJumping = false;


moveBtn.onclick = () => {
  if (isMovingRight) {

    ape.style.transition = 'left 1s ease, transform 1s ease';
    ape.style.left = '20%';
    ape.style.transform = 'translateX(-50%)';
  } else {

    ape.style.transition = 'left 1s ease, transform 1s ease';
    ape.style.left = '80%';
    ape.style.transform = 'translateX(-50%)';
  }
  isMovingRight = !isMovingRight;
};


jumpBtn.onclick = () => {
  if (isJumping) return;
  isJumping = true;
  ape.style.transition = 'transform 0.6s, box-shadow 0.3s';
  ape.style.transform = 'translateY(-150px) translateX(-50%)';
  ape.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
  setTimeout(() => {
    ape.style.transform = 'translateY(0) translateX(-50%)';
    ape.style.boxShadow = 'none';
    isJumping = false;
  }, 600);
};
