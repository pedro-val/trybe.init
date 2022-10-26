const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu'
let separado = frase.split(' ')
for (let i of separado){
    let letras = i.split('').length
    console.log(letras)
}