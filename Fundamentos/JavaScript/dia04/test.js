// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato abaixo:
let objeto = {
    area: 0,
    perimetro: 0,
  };
  function quadrilatero(base, altura) {
    objeto.area = base * altura;
    objeto.perimetro = (2 * base) + (2 * altura);
    return console.log(objeto)
  }
  quadrilatero(2,4)

//   // Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

//   // Exercício 2 - Crie uma função que, dado um array de números inteiros,
//   // retorne a quantidade de números pares e ímpares no formato abaixo:
  
  let numeros = {
    pares: 0,
    impares: 0,
  };

  function paresImpares(array) {
    for (let i in array) {
        if (array[i] % 2 == 0){
            numeros.pares += 1
        } else {
            numeros.impares += 1
        }
    }
    return console.log(numeros)
  }
  paresImpares([2, 3, 6, 7, 10, 1, 1, 2, 1, 1, 1, 1, 1])

//   // Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
//   // Considere que a string ending sempre será menor que a string word.
//   // Dica: Use o split.
  
//   // valor de teste: 'trybe' e 'be'
//   // valor esperado no retorno da função: true
//   // verificaFimPalavra('trybe', 'be');
//   // Retorno esperado: true
//   // verificaFimPalavra('joaofernando', 'fernan');
//   // Retorno esperado: false;