// let nota = 50
// if (nota >= 80)
// console.log('Parabéns, você foi aprovada!')
// else if (nota < 80 && nota >= 60)
// console.log('Você está na nossa lista de espera')
// else if (nota < 60 && nota >= 30)
// console.log('Em recuperação')
// else
// console.log('Você foi reprovada.')

let nota = 50
let mensagem = null
if (nota >= 80)
mensagem = ('Parabéns, você foi aprovada!')
else if (nota < 80 && nota >= 60)
mensagem = ('Você está na nossa lista de espera')
else if (nota < 60 && nota >= 30)
mensagem = ('Em recuperação')
else
mensagem = ('Você foi reprovada.')

console.log(mensagem)