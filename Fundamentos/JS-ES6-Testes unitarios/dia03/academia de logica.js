
function verificaArray(array) {    
    let boolean = true;
    if (Array.isArray(array) === false) {
        throw new Error("Parâmetro inválido.");
    }
    if (array.length === 1) {
        throw new Error("Parâmetro inválido.");
    }
    let verificador = array[0];
    for (let i = 1; i < array.length; i += 1) {
        if (verificador !== array[i]) {
            boolean = false;
            break;          
        } else {
            boolean = true;
        }
    }
    return boolean;
}

console.log(verificaArray([1,1,1,2,1]))

module.exports = verificaArray;