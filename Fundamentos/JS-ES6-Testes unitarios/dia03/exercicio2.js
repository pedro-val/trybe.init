// printMessage.js
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  
  const printMessage = (characterInfo) => {
    if (characterInfo.personagem !== undefined){
    return ('Boas vindas, ' + characterInfo.personagem);
    } else {
        throw new Error('Não existe propriedade personagem');
    }
  };
  
  
  module.exports = { info, printMessage };