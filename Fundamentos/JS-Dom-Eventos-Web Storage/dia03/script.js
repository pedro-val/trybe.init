const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
function criaDias(event) {
  let tagUl = document.querySelector('.days-container');
  tagUl.id = 'days';
  let ulId = document.getElementById('days');
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let i of decemberDaysList) {
    let li = document.createElement('li');
    li.classList.add('day');
    li.innerText = i;

    if (i == 24 || i == 25 || i == 31) {
      li.classList.add('holiday');
    }
    if (i == 4 || i == 11 || i == 18 || i == 25) {
      li.classList.add('friday');
    }
    ulId.appendChild(li);
  }
}
criaDias();
function botaoFeriados(Feriados) {
  let button = document.createElement('button');
  button.innerText = 'Feriados';
  button.id = 'btn-holiday';
  let buttonContainer = document.querySelector('.buttons-container');
  buttonContainer.appendChild(button);
}
botaoFeriados()
function mudaCorHoliday(event) {
  let dias = document.getElementsByClassName('holiday');
  for (let i in dias) {
    dias[i].style.backgroundColor = 'pink';
  }
}
function mudaCorHolidayBranca(event) {
  let dias = document.getElementsByClassName('holiday');
  for (let i in dias) {
    dias[i].style.backgroundColor = 'white';
  }
}
function botaoSexta(sexta) {
  let button = document.createElement('button');
  button.innerText = 'Sexta-feira';
  button.id = 'btn-friday';
  let buttonContainer = document.querySelector('.buttons-container');
  buttonContainer.appendChild(button);
}
botaoSexta()
function mudaCorSexta(event) {
  let dias = document.getElementsByClassName('friday');
  for (let i in dias) {
    dias[i].style.backgroundColor = 'purple';
  }
}
function mudaCorSextaBranca(event) {
  let dias = document.getElementsByClassName('friday');
  for (let i in dias) {
    dias[i].style.backgroundColor = 'white';
  }
}
let button = document.querySelector('#btn-holiday');
let buttonSexta = document.querySelector('#btn-friday');
button.addEventListener('click', mudaCorHoliday);
button.addEventListener('dblclick', mudaCorHolidayBranca);
buttonSexta.addEventListener('click', mudaCorSexta);
buttonSexta.addEventListener('dblclick', mudaCorSextaBranca);