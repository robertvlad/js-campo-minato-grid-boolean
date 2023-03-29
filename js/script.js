let container = document.getElementById('container-boxes');

for (let i = 0; i < 100; i++) {
    
    let box = document.createElement('div');

    box.classList.add('box');

    container.appendChild(box);
};