const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  // Adicione seu código aqui
  emailListInData.forEach((iten, posicao, array) => {
    console.log(`a pessoa com o email: ${iten}, trabalha na mesma empresa que eu.`)
    console.log(`ele está na posição ${posicao}, da lista de email.`)
    console.log(`a lista tem ${ array.length} emails cadastrados.`)
  })