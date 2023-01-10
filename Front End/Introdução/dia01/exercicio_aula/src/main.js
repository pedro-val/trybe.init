import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const button = document.getElementById('botao');

const text = document.getElementById('text');

button.addEventListener('click', () => {
    text.innerText = nanoid();
    copy(`${text.innerText}`);
    alert('Senha copiada!');
});