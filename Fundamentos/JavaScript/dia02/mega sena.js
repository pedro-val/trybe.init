let sorteados = [11, 43, 23, 76, 12, 1, 2];
let jogo = [12, 2, 11]
let numerosDeAcertos = []

for (let i = 0; i < sorteados.length; i++){
    for (let ij = 0; ij < jogo.length; ij++){
        if (jogo[ij] == sorteados[i])
        numerosDeAcertos.push(jogo[ij])
    }
}
console.log(numerosDeAcertos)