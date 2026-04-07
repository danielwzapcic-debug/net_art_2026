const button = document.getElementById('changeButton');
const body = document.body;
const image = document.getElementById('myImage');

let movedRight = false;

button.addEventListener('click', () => {
    // Change background color
    if (body.style.backgroundColor === 'lightblue') {
        body.style.backgroundColor = '#f0f0f0';
    } else {
        body.style.backgroundColor = 'lightblue';
    }
    
    // Shift image position
    if (movedRight) {
        image.style.left = '0px';
        movedRight = false;
    } else {
        image.style.left = '200px';
        movedRight = true;
    }
});
