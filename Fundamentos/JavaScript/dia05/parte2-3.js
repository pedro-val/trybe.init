longestWord = (frase) => {
    let separacao = frase.split(' ')
    let maior = '0'
    for (let i of separacao) {
       if (i.length > maior.length) {
        maior = i
       }
    }
    return console.log(`A maior palavra da frase é: ${maior}.`)
}
longestWord('Antônio foi noasdasdasdasdasdasd banheiro e não sabemos o que aconteceu')
// Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().

// longestWord = (frase) => {
//     let separacao = frase.split(' ')
// }