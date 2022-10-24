// Escreva um algoritmo que recebe 2 parâmetros:

// Um array contendo um conjunto de números
// O valor de um desses elementos
// Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.

// Caso não o encontre, imprima:

// "Elemento não encontrado no array"

let array = [1, 89, 23, 23, 50, 28, 34, 29];
let num = 50;
// for (i = 0; i < array.length; i++) {
//     if (array[i] == num) {
//         console.table(array[i])
//     }
// }
console.log(array.indexOf(num))