const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((nome) => nome === name);

const people = [
    { name: 'Mateus', age: 20 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 21 },
  ];
  
const verifyAges = (arr, idade) => arr.every((num) => {
    return num.age > idade;

}) 
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));
