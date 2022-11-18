const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function turnoNoite2(obj, chave, value) {
    obj[chave] = value;
  }
  turnoNoite2(lesson2, 'turno', 'noite');

  function keyList(obj) {
    console.log(Object.keys(obj));
  }

  function objLength (obj) {
    const tamanho = Object.keys(obj).length;
    console.log(tamanho);
  }

  function valueList(obj) {
    console.log(Object.values(obj));
  }

  const allLessons = {
    lesson1: {},
    lesson2: {},
    lesson3: {},
  }
  Object.assign(allLessons.lesson1, lesson1);
  Object.assign(allLessons.lesson2, lesson2);
  Object.assign(allLessons.lesson3, lesson3);


  function totalStudents (obj) {
    const l1 = allLessons.lesson1.numeroEstudantes;
    const l2 = allLessons.lesson2.numeroEstudantes;
    const l3 = allLessons.lesson3.numeroEstudantes;
    return console.log(`O número total de estudantes é de ${l1 + l2 + l3}.`);
  }
  
  function getValueByNumber (obj, position) {
    const valorChave = Object.values(obj);
    return console.log(valorChave[position]);
  }

function verifyPair(obj, key, value) {
    if (obj[key] && obj[key] === value) {
        console.log('deu certo');
    } else {
        console.log('deu errado');
    }
}
