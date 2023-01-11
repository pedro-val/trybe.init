const promisses = () => {
    
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            const number = Math.round(Math.random() * 50);
            if (number % 2 === 0) {
                resolve(number);
            }
            rejected(new Error(`Número gerado é ímpar, não valido. ${number}`));
        }, 1000)
    })
}

promisses().then((response) => {
    console.log(`Número válido ${response}`)
})
.catch((error) => {
    console.log(error.message)
})
