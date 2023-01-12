import './style.css';

const tagName = document.getElementById('nameHero');
const botao = document.getElementById('button');
const imagem = document.getElementById('imagem');

const getRandonHero = () => {
    const idNumber = Math.round(Math.random() * 500);
    fetch(`https://www.superheroapi.com/api.php/6767071873319305/${idNumber}`)
      .then((data) => data.json()
        .then((info) => {
            tagName.innerText = info.name;
            imagem.src = info.image.url;
        }))
}

botao.addEventListener('click', () => getRandonHero());