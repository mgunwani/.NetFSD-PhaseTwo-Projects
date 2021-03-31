// alert('Hello Everyone');
// console.log('Hello World..!!');
// document.write('Hello Friends..!!');

function update(element) {
    document.getElementById('message').innerHTML = element.alt;
    console.log(element.src);
}

function undo() {
    document.getElementById('message').innerHTML = 'Hover Over Below Image';
}