// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// Valor de teste: N = 5.

// Valor esperado no retorno da função: 1+2+3+4+5 = 15.
function soma(num1) {
    let somatorio = 0
    for (let i = 1; i <= num1; i += 1){
    if (num1 > 0) {
        somatorio += i        
    }

console.log(somatorio)    
}
}
soma(5)