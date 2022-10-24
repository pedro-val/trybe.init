let currentHour = 14;
let mensagem = null

if (currentHour >= 22)
mensagem = ('Hora de dormir, ja passou das dez.')
else if (currentHour < 22 && currentHour >= 18)
mensagem = ('hora do jantar amigo!')
else if (currentHour < 18 && currentHour >= 14)
mensagem = ('hora do lanche da tarde!')
else if (currentHour < 14 && currentHour >= 11)
mensagem = (' ALMOÇOOO')
else if (currentHour < 11 && currentHour >= 4)
mensagem = ('Hora do café!')
else 
mensagem = ('Você deveria estar domindo nessa hora')
console.log(mensagem)
