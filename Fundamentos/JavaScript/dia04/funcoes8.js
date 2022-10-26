// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'

// Valor esperado no retorno da função: true

// verificaFimPalavra('trybe', 'be');

// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');

// Retorno esperado: false
// let chars1 = word.split('');
// let chars2 = ending.split('');

function verificaFimPalavra(word, ending) {
    let booleano = true
    let reverseWord = word.split('').reverse();
    let reverseEnding = ending.split('').reverse();
    for (i in reverseEnding) {      
        for (i2 = 0; i2 < reverseEnding.length; i2 += 1) {
            if ( reverseEnding[i] === reverseWord[i2] ) {
                booleano = true
            } else {
                booleano = false
            }
        }
    }
    return console.log(booleano)
}
verificaFimPalavra('pedromarconival', 'al')