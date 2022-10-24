// 2. Retorne os números ímpares
// A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

// Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

// Use a seguinte estrutura na impressão:

// "x, y, z, ...n"
let array = [];
let impares = [];
for (index = 1; index <=50; index++) {
    array.push(index);
}
console.log(array)
for (index = 0; index < array.length; index++) {
    if( array[index] % 2 !== 0) {
        impares.push(array[index]);
    }
}
console.log(impares)