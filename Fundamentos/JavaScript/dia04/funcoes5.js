let maiorPosicao;
function biggerArrayNumber(array) {
    let maior = array[0];
    maiorPosicao = 0 ;
    for (let key in array) {
        if (array[key] >= maior) {
            maior = array[key]
            maiorPosicao = array.indexOf(maior)
        }
    }
    return console.log(maiorPosicao)
}
biggerArrayNumber([2, 4, 6, 7, 10, 0, -3])
    