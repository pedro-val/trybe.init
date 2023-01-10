import validador from 'validator';

const botao = document.getElementById('button');
const inputArea = document.getElementById('valor');
const select = document.getElementById('select');

botao.addEventListener('click', (event) => {
    console.log(captureValue());
    event.preventDefault();
})

const captureValue = () => {
    const selectedArea = select.options[select.selectedIndex]
    return selectedArea.text;
}