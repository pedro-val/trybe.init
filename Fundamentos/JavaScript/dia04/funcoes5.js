function biggerArrayNumber(array) {
    let maior = array[0]
    for (let key in array) {
        if (array[key] >= maior) {
            maior = array[key]
        }
    }
    return console.log(maior)
}
biggerArrayNumber([2, 4, 6, 7, 10, 0, -3])
    