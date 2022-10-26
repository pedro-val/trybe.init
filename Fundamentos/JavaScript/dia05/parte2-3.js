const longestWord = (frase) => {
    let separacao = frase.split(' ');
    let maior = separacao[0];
    for (let i = 1; i < separacao.length; i += 1) {
       if (separacao[i].length > maior.length) {
        maior = separacao[i];
       }
    }
    return console.log(`A maior palavra da frase é: ${maior}.`);
}
longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu');
// Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().

// longestWord = (frase) => {
//     let separacao = frase.split(' ')
// }