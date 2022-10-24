// Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. O algoritmo deve receber antes de criar essa sequência, o valor inicial e final.

// Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

// Se houver 50 ou mais:

// "Há 50 ou mais números divisíveis por 3"

// Caso o contrário: "Sequência muito pequena."
let array = [];
let impares = [];
let por3 = [];
for (index = 1; index <= 700; index += 2) {
    array.push(index);
}
for (let index = 0; index < array.length; index++) {
    if (array[index] % 3 == 0) {
        por3.push(array[index])
    }
}
if (por3.length >= 50) {
    console.log('Há 50 ou mais números divisíveis por 3')
} else {
    console.log('Sequência muito pequena')
}