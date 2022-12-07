const myList = [5, 2, 3];


// escreva swap abaixo
const swap = (a, b, c) => [a, b, c] = [c, b, a];

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (carro) => {
    [a, b, c] = carro;
    return {
        nome: a,
        fabricante: b,
        ano: c
    }
}
console.log(toObject(shelbyCobra))
