// let num = [];
// let temp = [];
// for (let i = 2; i <= 50; i++) {
//     num.push(i)    
// }
// console.log(num)

let temp = [];
for(let ind = 0; ind < num.length; ind++) {
    for (let index = num.length; index >= 0; index = index - 1) {
        if (num[ind] % num[index] == 0) {
            temp.push[num[ind]];            
        }                     
    }
}
console.log(temp)
