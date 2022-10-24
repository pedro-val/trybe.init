let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = '0';
for (let index = 0; index < array.length; index++) {
    if ((bigger.length) < (array[index].length)) {
        bigger = array[index];
    }    
}
console.log(bigger)