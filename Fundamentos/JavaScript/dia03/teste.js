let primoM = 0

for (let dividido = 2; dividido <= 1000; dividido++) {
  let isPrimo = true;
  for (let divisor = 2; divisor < dividido; divisor++) {
    if (dividido % divisor === 0) {
      isPrimo = false;
    }
  }
  if (isPrimo) {
  primoM = dividido
  }  
}
console.log(primoM)