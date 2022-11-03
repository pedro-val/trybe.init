let corFundo = document.getElementById('corFundo');
let corFonte = document.getElementById('corFonte');
let tamanho = document.getElementById('tamanhoFonte');
let espacamento = document.getElementById('espacamento');
let fonte = document.getElementById('fonte');
let main = document.getElementById('main');

corFundo.addEventListener('click', (event) => {
   main.style.backgroundColor = event.target.innerText;
})

corFonte.addEventListener('click', (event) => {
    main.style.color = event.target.innerText;
})

tamanho.addEventListener('click', (event) => {
    main.style.fontSize = event.target.innerText;
})

espacamento.addEventListener('click', (event) => {
    main.style.lineHeight = event.target.innerText;
})

fonte.addEventListener('click', (event) => {
    main.style.fontFamily = event.target.innerText;
})