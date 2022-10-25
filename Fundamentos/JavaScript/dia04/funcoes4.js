// function biggestName(array) {
//     let atual;
//     let chars = array[0].split('');
//     for (let i = 1; i <= array.length; i +=1) {
//         if (array[i].split('').length > chars.length) {
//             atual = array[i].length
//         }
//     }
//     return console.log(atual)
// }

// biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

// function biggestName(array) {
//     let atual = array[0]
//     for (let i = 1; i <= array.lenght; i +=1){
//         if (atual.split('').length > array[i].split('').length) {
//             atual = array[0]
//         } else {
//             atual = array[i]
//         }
//     }
//     return console.log(atual)
// }

function biggestName(array) {
    for ( let index = 1; index < array.length; index++) {
    return console.log(array[index].length)
    }
}
biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);