const newEmployees = () => {
    const employees = {
      id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };


  const sorteio = ((num) => {
    const nSorteado = Math.floor(Math.random() * 5 + 1);
    if ( nSorteado === num) {
        return 'Parabéns, você ganhou';
    } else {
        return 'Tente novamente';
    }
});

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corretor = ((gabarito, respostas) => {
    let notaFinal = 0;
    for (let i = 0; i < respostas.length; i += 1) {
        if (respostas[i] === gabarito[i]) {
            notaFinal += 1
        } else if (respostas[i] !== 'N.A') {
            notaFinal -= 0.5;
        }         
    }
    return notaFinal;
})
console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS))