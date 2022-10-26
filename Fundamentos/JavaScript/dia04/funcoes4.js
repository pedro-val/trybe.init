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


function biggestName(array) {
    let atual = array[0]
    for (let key in array) {
        if (array[key].length > atual.length) {
            atual = array[key]
        } 
    }    
     return console.log(atual)
}
biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
