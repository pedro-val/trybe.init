let custo = 0
let valorVenda = 100
let custoImposto = ((custo/100) * 20)
let custoTotal = custo + custoImposto
let lucroUnidade = (valorVenda - custoTotal)
let lucroTotal = (lucroUnidade * 1000)
if (custoTotal === 0 || valorVenda === 0)
console.log('erro')
else
console.log(lucroTotal)
