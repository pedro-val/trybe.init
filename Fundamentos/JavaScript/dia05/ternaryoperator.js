// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

let speed = 190
const speedCar = (speed) => speed >= 120 ? 'Voce ultrapassou o limite de velocidade.' : 'Você está na velocidade permitida'
console.log(speedCar(speed));