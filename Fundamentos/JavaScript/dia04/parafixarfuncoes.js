const num1 = 0;
const num2 = 6;
const num3 = 2;
let resultado;

function soma() {
    resultado = num1 + num2;
    return resultado
}
function subtracao() {
    resultado = num1 - num2;   
    return resultado
}
function multiplicacao(n) {
    resultado = num1 * num2;
    return resultado
}
function divisao() {
    resultado = num1 / num2;
    return resultado
}
function resto() {
    resultado = num1 % num2;
    return resultado
}
function maiorNumero() {
    if (num1 > num2) {
        resultado = num1
    } else if ( num1 < num2) {
        resultado = num2
    } else ( resultado = 'Números iguais')
    return resultado
}
function higherNumber() {
    if (num1 > num2 && num1 > num3) {
        resultado = num1
    } else if (num2 > num1 && num2 > num3) {
        resultado = num2
    } else if (num3 > num1 && num3 > num2) {
        resultado = num3
    } else 
    resultado = 'Dois ou mais números iguais'
    return resultado
}
function checkSignal() {
    if (num1 > 0) {
        resultado = 'positive'
    } else if (num1 < 0) {
        resultado = 'negative'
    } else 
    resultado = 0
    return resultado
}
console.log(checkSignal())