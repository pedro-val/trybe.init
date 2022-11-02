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
botaoFeriados();
function botaoSexta(sexta) {
  let button = document.createElement('button');
  button.innerText = 'Sexta-feira';
  button.id = 'btn-friday';
  let buttonContainer = document.querySelector('.buttons-container');
  buttonContainer.appendChild(button);
}
botaoSexta();

function mudaCorHoliday(event) {
  let dias = document.getElementsByClassName('holiday')
  for (let i in dias) {
    if (dias[i].style.backgroundColor === 'pink') {
      dias[i].style.backgroundColor = '';
    } else {
      dias[i].style.backgroundColor = 'pink';
    }
  }
}
let button = document.querySelector('#btn-holiday');
button.addEventListener('click', mudaCorHoliday);

function mudaCorSexta(event) {
  let dias = document.getElementsByClassName('friday')
  for (let i in dias) {
    if (dias[i].style.backgroundColor === 'blue') {
      dias[i].style.backgroundColor = '';
    } else {
      dias[i].style.backgroundColor = 'blue';
    }
  }
}
let buttonSexta = document.querySelector('#btn-friday');
buttonSexta.addEventListener('click', mudaCorSexta);


function lupa (event) {  
  let dias = document.getElementsByClassName('day');
  for (let i of dias) {
    i.addEventListener('mouseover', () => {      
      i.style.width = '30%';
      i.style.height = '30%';
      i.style.transform.scale = '1.5';      
    })     
    i.addEventListener('mouseout', () => {      
      i.style.width = '';
      i.style.height = '%';
      i.style.transform.scale = '1'; 
    })    
  }  
}
lupa();

function tarefas(tarefa) {
  let div = document.querySelector('.my-tasks');
  let tarefa1 = document.createElement('span');
  tarefa1.innerText = tarefa;
  div.appendChild(tarefa1);
}

function corTarefa(cor) {
  let div = document.querySelector('.my-tasks');
  let novaDiv = document.createElement('div');
  novaDiv.className = 'task';
  novaDiv.style.backgroundColor = cor;
  div.appendChild(novaDiv);
}

function selecionaTarefa () {
  let task = document.getElementsByClassName('task');
  for (let i of task) {
    i.addEventListener('click', () => {
      i.classList.add('selected');
    })
    i.addEventListener('dblclick', () => {
      i.classList.remove('selected');
    })
  }
}
let ativaTarefas = document.querySelector('.my-tasks');
ativaTarefas.addEventListener('mouseover', selecionaTarefa);

function tarefaDoDia () {
  let dias = document.getElementsByClassName('day');
  for (i of dias) {
    i.addEventListener('click', () => {            
      i.classList.add('selected');
    })    
    i.addEventListener('dblclick', () => {            
      i.classList.remove('selected');
    })   
  }
}
let ativaTarefaDoDia = document.querySelector('#days')
ativaTarefaDoDia.addEventListener('mouseover', tarefaDoDia);