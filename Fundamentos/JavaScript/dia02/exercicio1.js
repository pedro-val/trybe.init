// // console.log(numbers);
// // console.log(numbers.length)
// let somaArray = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]
// let media = somaArray / 2
// // console.log(somaArray)
// // console.log(media)
// if (media > 20) {
//     console.log('valor maior que 20')
// } else {
    //     console.log('valor menos ou igual a 20')
// }
// for (let i = 0; i < numbers.length; i++) {
//     soma = soma + numbers[i]
// }
// console.log(soma)
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];
for (let i = 1; i < numbers.lenght; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}
console.log(maior);
    
