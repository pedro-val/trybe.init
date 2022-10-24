
let carol = 56
let murilo = 25
let baeta = 59
let menorIdade;
let idades = [carol, murilo, baeta]
let menorNome;
for (let index = 0; index < idades.length; index += 1) {
    if (index == 0){
        menorIdade = idades[0]
    } else {
        if (idades[index] < menorIdade) {
        menorIdade = idades[index]
        }
    }
}
if (menorIdade = idades[0]) {
    console.log('Carol tem menor idade')
} else if (menorIdade = idades[1])
    console.log('Murilo tem menor idade')
    else console.log('Baeta tem a menor idade.')

//     for (let i = 0; i < idades.length; i += 1) {
//         if (idades[i] > idades[index]) {
//         menorIdade = idades[index]
//         }
//     }
// }
console.log(menorIdade)