let container = document.getElementById('container-boxes');

for (let i = 0; i < 100; i++) {
    
    let box = document.createElement('div');

    box.classList.add('box');

    container.appendChild(box);
};

let boxes = document.getElementsByClassName('box');
console.log(boxes);

for (let i = 0; i < boxes.length; i++) {
    
    let single_box = boxes[i];

    single_box.addEventListener('click', function() {

        if (this.classList.contains('red')) {
            this.classList.remove('red')
        }
        else {
            this.classList.add('red')
        }
    })
}