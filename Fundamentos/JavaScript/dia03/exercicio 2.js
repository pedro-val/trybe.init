let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigger = 'java';
for (let index = 0; index < array.length; index++) {
    if ((bigger.length) > (array[index].length)) {
        bigger = array[index];
    }    
}
console.log(bigger)