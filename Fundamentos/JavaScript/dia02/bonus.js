// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let i = 1; i < numbers.length; i += 1) {
//     for (let i2 = 0; i2 < i; i2 += 1) {
//       if (numbers[i] > numbers[i2]) {
//         let position = numbers[i];
//         numbers[i] = numbers[i2];
//         numbers[i2] = position;
//       }
//     }
//   }
//   console.log(numbers)
let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];
for (let i = 0; i < num.length; i++){
    if (i + 1 < num.length) {
        novoArray.push(num[i] * num[i + 1]);
    } else {
        novoArray.push(num[i] * 2);    
    }       
   }
console.log(novoArray)

