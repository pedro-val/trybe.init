function hydrate(string) {
    const nums = string.match(/\d/g);
    let soma = 0;
    for (let i of nums) {        
        soma += parseInt(i);
        console.log(soma)
    }
    if (soma === 1) {
        return `1 copo de água`
    } else {
        return `${soma} copos de água`
    }
}

module.exports = hydrate;

