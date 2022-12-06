const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
// });

const sum = (...n) => {
    let total = 0
    for (let i = 0; i < n.length; i += 1) {
        total += n[i];
    }
    return total;
}
console.log(sum(4,5,6,5))