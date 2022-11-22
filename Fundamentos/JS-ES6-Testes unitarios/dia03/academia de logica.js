
function verificaArray(array) {    
    let boolean = true;
    if (Array.isArray(array) === false) {
        throw new Error("Parâmetro inválido.");
    }
    if (array.length === 1) {
        throw new Error("Parâmetro inválido.");
    }
    let verificador = array[0];
    for (let i = 1; i < array.length; i += 1) {
        if (verificador !== array[i]) {
            boolean = false;
            break;          
        } else {
            boolean = true;
        }
    }
    return boolean;
}

module.exports = verificaArray;

const gameOfThronesCharacters = [
    {
      firstName: 'Daenerys',
      lastName: 'Targaryen',
      fullName: 'Daenerys Targaryen',
      title: 'Mother of Dragons',
      family: 'House Targaryen',
    },
    {
      firstName: 'Brienne',
      lastName: 'Tarth',
      fullName: 'Brienne of Tarth',
      title: 'Lady Brienne',
      family: 'Tarth',
    },
    {
      firstName: 'Jon',
      lastName: 'Snow',
      fullName: 'Jon Snow',
      title: 'King of the North',
      family: 'House Stark',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
      fullName: 'Arya Stark',
      title: 'No One',
      family: 'House Stark',
    },
  ];
  
  /*
  Exercício 2:
  Escreva uma função que recebe por parâmetro o array de objetos com informações de personagens (gameOfThronesCharacters), e deve retornar um objeto no seguinte formato:
    {
    'House Targaryen': ['Daenerys Targaryen'],
    'Tarth': ['Brienne of Tarth'],
    'House Stark': ['Jon Snow', 'Arya Stark'],
    }
  O objetivo é determinar quem compõe cada família de Westeros.
  */
  
  // Escreva seu código aqui!

  /*
Exercício 3:
Utilizando operadores ternários e arrow functions reescreva a seguinte função:
function isZero(number) {
  if (number === 0) {
    return "Zero";
  }
  return "Not zero";
}
*/

// Escreva seu código aqui!

const movieRatings = {
    'The Godfather': 9.2,
    'The Matrix': 8.7,
    'The Lion King': 8.5,
    'Fight Club': 8.8,
    'The Prestige': 8.5,
  };
  
  /*
  Exercício 4:
  Escreva uma função que recebe por parâmetro um objeto com as notas de filmes (movieRatings), e tem um segundo parâmetro opcional.
  Caso não venha nada no segundo parâmetro o retorno será a média das notas dos filmes, mas caso o segundo parâmetro venha preenchido, deve vir com o nome de um filme, e o retorno será um booleano confirmando se o filme se encontra no objeto ou não.
  */
  
  // Escreva seu código aqui!