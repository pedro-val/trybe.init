import './style.css'

const botaoDog = document.getElementById('dogButton');
const botaoCat = document.getElementById('catButton');
const botaoRandon = document.getElementById('surpriseButton');
const imageContainer = document.getElementById('imagem');

const getDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((data) => data.json())
        .then((info) => {
            imageContainer.src = info.message;
        })
}

const getCat = () => {
    fetch('https://aws.random.cat/meow')
      .then((data) => data.json())
        .then((info) => {
            imageContainer.src = info.file;
        })
}

botaoDog.addEventListener(('click'), () => getDog());
botaoCat.addEventListener(('click'), () => getCat());

botaoRandon.addEventListener(('click'), () => {
    const randonNum = Math.round(Math.random() * 51);
    if (randonNum % 2 === 0) {
        getCat();
    } else {
        getDog();
    }
    
})