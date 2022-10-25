function arr(array) {
    let biggerN = array[0]
    for (let i = 1; i <= array.length; i +=1){       
        if (biggerN < array[i]) {
            biggerN = array[i];
        }
    }
    return console.log(array.indexOf(biggerN))
}
arr([200, 3, 6, 70, 10, 10000])