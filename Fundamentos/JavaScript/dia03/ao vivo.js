// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// 
// let soma = 0
// for(let i =1; i <= 50; i++){
// soma += i 
// }
// console.log("A soma total de 1 a 50 é: " + soma)
// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
// let arr = [];
// for (let i = 2; i <= 150; i++) {
//     if (i % 3 == 0) {
//         arr.push(i)
//     }
// }
// if (arr.length == 50) {
//     console.log("Mensagem secreta")
// }
// console.log(arr)


// 5 - Crie um algoritmo que recebe a idade de Carolzita, Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova. 

let carol = 20
let murilo = 25
let baeta = 30
let menorIdade
let idades = [carol, murilo, baeta]
for (let index = 0; index < idades.length; index += 1) {
    for (let i = 1; i <= 2; i += 1) {
        if (idades[index] < idades[i]) {
            menorIdade = idades[index]
        }
    }
}
console.log(menorIdade)