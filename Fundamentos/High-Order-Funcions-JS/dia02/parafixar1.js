const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  people.sort((a, b) => a.age - b.age);
  people.sort((a, b) => a.name > b.name ? 1 : -1);




  function descendingOrder(n){
    if (n === undefined) {
      n = '0';
    }
    const array = JSON.stringify(n).split('');
    array.sort((a,b) => b - a);
    let resultado = '';
    array.forEach((num) => resultado += num)
    return resultado;
  }
  console.log(descendingOrder(123456789))