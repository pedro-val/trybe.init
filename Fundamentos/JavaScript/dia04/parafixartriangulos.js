const a1 = 100;
const a2 = 50;
const a3 = -30;
let resultado;
function triangleValidation() {
    if ((a1 > 0) && (a2 > 0) && (a3 > 0)) {
        if (a1 + a2 + a3 == 180) {
            resultado = 'triângulo válido!'
        } else
            resultado = 'Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.'
            return resultado
    } else
        resultado = 'Algum dos ângulos é inválido!' 
        return resultado
}
console.log(triangleValidation())