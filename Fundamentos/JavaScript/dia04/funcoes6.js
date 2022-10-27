function arrayRepeat(array) {
    let maiorNumeroRepetido = 0;
    let contadorNumerosRepetidos = 0;
    let contadorDoMaior = 0;
    let numeroIndexAtual = array[0];
    for (index = 1; index < array.length; index +=1) {        
        if (numeroIndexAtual === array[index]) {
            contadorNumerosRepetidos += 1;
        }
        numeroIndexAtual = array[index];
        if (contadorNumerosRepetidos > contadorDoMaior) {
            contadorDoMaior = contadorNumerosRepetidos;
            maiorNumeroRepetido = array[index];
        }
    }
    return maiorNumeroRepetido;
    
}
console.log(arrayRepeat([2, 3, 2, 5, 8, 8, 8, 8, 8, 8, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));