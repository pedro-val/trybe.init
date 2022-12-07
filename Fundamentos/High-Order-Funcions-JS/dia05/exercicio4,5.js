// const student1 = {
//     name: `Claudia`,
//     lastName: `Farias`,
//     age: 23,
//   }
  
//   const student2 = {
//     name: `Vitor`,
//     age: 20,
//   }
  
//   // escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`
  
//   const getLastName = ({lastName = "lastName não preenchido"}) => lastName;



  const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];

  // Escreva seu código aqui
  const [student1, b, c] = moreStudents;
  const [student2, student3] = b;
  const [student4, student5] = c;

console.log(student1, student2, student3, student4, student5);