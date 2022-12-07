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

// escreva greet abaixo

const greet = (name, saudation = 'Hi') => {
    return `${saudation} ${name}`
}

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

