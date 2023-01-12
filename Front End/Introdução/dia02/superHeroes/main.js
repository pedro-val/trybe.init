import './style.css';

const tagName = document.getElementById('nameHero');
const botao = document.getElementById('button');
const imagem = document.getElementById('imagem');

function errorMessage(errorMessage) {
  tagName.innerText = errorMessage;
}

const getRandonHero = (event) => {
    const idNumber = Math.round(Math.random() * 1000); 
    fetch(`https://www.superheroapi.com/api.php/6767071873319305/${idNumber}`)
      .then((data) => data.json()
        .then((info) => {
            tagName.innerText = info.name;
            imagem.src = info.image.url;
        })).catch((erro) => {
          errorMessage('Erro! Tente outra vez!')
          imagem.src = 'http://www.blogdogasparetto.com.br/wp-content/uploads/2013/04/falha_gestao_2.jpg';
          alert('Numero de herói nao encontrado.')
        })
}

botao.addEventListener('click', () => getRandonHero());