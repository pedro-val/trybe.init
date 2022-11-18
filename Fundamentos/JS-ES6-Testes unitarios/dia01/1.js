//   const student = {
//     html: 'Bom',
//     css: 'Ótimo',
//     javascript: 'Ruim',
//     softskills: 'Ótimo',
//     git: 'Bom', // 
//   };

//  function lerObjeto(event) {
//     const key = Object.keys(event);    
//     for (let i in key) { 
//         console.log(`${key[i]}: Nível: ${Object.values(event)[i]}`)        
//     }
//  } 
//  lerObjeto(student)

//  const coutries = {
//     franca: 'Paris',
//     brasil: 'Brasília',
//     espanha: 'Madrid',
//     portugal: 'Lisboa',
//   };
//   const pairKeyValue = Object.entries(coutries);
//   for(index in pairKeyValue) {
//     console.log('--------');
//     console.log('País:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
//   };

//   const person = {
//     name: 'Alberto',
//     lastName: 'Gomes',
//     age: 20,
//   };
  
//   const info = {
//     age: 23,
//     job: 'engenheiro',
//   };
  
//   const family = {
//     children: ['Maria', 'João'],
//     wife: 'Ana',
//   };
  
//   Object.assign(person, info, student)
//   console.log(person)
//   console.log(info)
//   console.log(student)
  
const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);