const btn = document.getElementById('actionBtn');
const ape = document.getElementById('ape');

let jumped = false;

btn.addEventListener('click', () => {

  if (!jumped) {
    ape.style.transition = 'transform 0.6s, box-shadow 0.3s';
    ape.style.transform = 'translateY(-150px)';
    ape.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
    jumped = true;
    setTimeout(() => {
      ape.style.transform = 'translateY(0)';
      ape.style.boxShadow = 'none';
      jumped = false;
    }, 600);
  }
});
