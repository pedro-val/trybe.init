
let button = document.getElementById('submit');

button.addEventListener('click', (event) => {
    event.preventDefault()
})

let inputs = document.getElementsByTagName('input');
let clear = document.getElementById('clear');
function limpar() {
    let text = document.getElementById('frase');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = null;
    }
    text.value = null;
}
clear.addEventListener('click', limpar);