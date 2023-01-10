import { nanoid } from 'nanoid';

const button = document.getElementById('botao');

const text = document.getElementById('text');

button.addEventListener('click', () => {
    text.innerText = nanoid();
});