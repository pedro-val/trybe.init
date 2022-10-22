let sorteados = [11, 43, 23, 76, 12, 1, 2];
let jogo = [12, 2, 11, 43, 76, 91] 
let numerosDeAcertos = []

for (let i = 0; i < sorteados.length; i++){
    for (let ij = 0; ij < jogo.length; ij++){
        if (jogo[ij] == sorteados[i])
        numerosDeAcertos.push(jogo[ij])
    }
}
if (numerosDeAcertos.length == 5) {
    console.log('Voce fez a quina, com os números:' + numerosDeAcertos)
} else if (numerosDeAcertos.length == 6) {
    console.log('Você é o ganhador da mega sena, com os números:' + numerosDeAcertos)
} else {
    console.log('Infelizmente não acertou números suficientes, números acertados:' + numerosDeAcertos)
}