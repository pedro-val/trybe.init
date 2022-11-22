// printMessage.js
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  
  const printMessage = (characterInfo) => {
    return ('Boas vindas, ' + characterInfo.personagem);
  };
  
  
  module.exports = { info, printMessage };