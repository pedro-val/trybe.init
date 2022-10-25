function arr(array) {
    let minorN = array[0]
    for (let i = 1; i <= array.length; i +=1){       
        if (minorN > array[i]) {
            minorN = array[i];
        }
    }
    return console.log(array.indexOf(minorN))
}
arr([200, 3, 6, 70, -2, 10000])