// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false

function palindromeValidation(palavra) {
    if ((palavra.split('').join('')) == (palavra.split('').reverse().join(''))){
     return console.log('true')
     } else {
     return console.log('false')
 } 
 }
 palindromeValidation('pedro')