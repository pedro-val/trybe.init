let salarioBruto = 3000
let salarioSemInss = null
let aliquotaIr = null
let aliquotaInss = null
{
    if (salarioBruto <= 1556.94) {
        aliquotaInss = (salarioBruto * 0.08)
        } else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
        aliquotaInss = (salarioBruto * 0.09)
        } else if
        (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
        aliquotaInss = ( salarioBruto * 0.11)
        } else {
        aliquotaInss = (570.88) }
    salarioSemInss = salarioBruto - aliquotaInss
    }


        
{
    if (salarioSemInss <= 1903.98) {
        aliquotaIr = 0
        } else if (salarioSemInss > 1903.98 && salarioSemInss <= 2826.65) {
        aliquotaIr = (salarioSemInss * 0.075) - 142.80
        } else if (salarioSemInss > 2826.65 && salarioSemInss <= 3751.05) {
        aliquotaIr = (salarioSemInss * 0.15) - 354.80
        } else if (salarioSemInss > 3751.05 && salarioSemInss <= 4664.68){
        aliquotaIr = (salarioSemInss * 0.225) - 636.13
        } else {    
        aliquotaIr = 869.36 + (salarioSemInss * 0.275)
        }
    salarioLiquido = (salarioSemInss - aliquotaIr)
}
console.log(salarioLiquido)

