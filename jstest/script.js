
const button = document.getElementById('moveApeBtn');
const body = document.body;
const apeImage = document.getElementById('apeImage');

let movedRight = false;


button.addEventListener('click', function() {

  if (body.style.backgroundColor === 'lightcoral') {
    body.style.backgroundColor = '#ffe4b5'; // original color
  } else {
    body.style.backgroundColor = 'lightcoral'; // new color
  }

  // Shift the ape image
  if (movedRight) {
    apeImage.style.left = '50%';
    apeImage.style.top = '50%';
    apeImage.style.transform = 'translate(-50%, -50%)';
    movedRight = false;
  } else {
    apeImage.style.left = '80%';
    apeImage.style.top = '50%';
    apeImage.style.transform = 'translate(-50%, -50%)';
    movedRight = true;
  }
});
