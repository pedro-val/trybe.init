// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

// Valor esperado no retorno da função: 2.



function arrayRepeat(array) {
    let biggerRepeat = 0;
    let biggerIndex = 0;
    let atualIndexRepeat = 0;
    for ( let i in array) {
        let numero = array[i];
        for ( let i2 in array) {
            if (numero == numero[i2]){
                biggerIndex += 1;
            }
        }
        if (biggerIndex > biggerRepeat){
            biggerIndex = biggerRepeat
            atualIndexRepeat = i
        }
        biggerIndex = 0
    }
    console.log(biggerRepeat)
}
arrayRepeat([2, 3, 2, 5, 8, 8, 8, 8, 8, 8, 2, 3])