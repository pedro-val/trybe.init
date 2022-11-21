
const myFizzBuzz = require('./exercicio2');

describe('Verificando codigo Fizzbum', () => {
    it('verificação de divisor de 5 e 3', () => {
        expect(myFizzBuzz(15)).toBe("fizzbuzz");
    })
});