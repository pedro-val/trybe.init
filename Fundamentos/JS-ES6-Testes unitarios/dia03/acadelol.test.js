const verificaArray = require('./academia de logica.js')

describe('verifique se todos os valores são iguais.', () => {
    it('Valide que o tipo de entrada seja array', () => {
        expect(() => verificaArray('nome')).toThrow(Error);
    });
    it('o tamanho seja maior que 1', () => {
        expect(() => verificaArray([1])).toThrow(Error);
    });
    it('O retorno deve ser um booleano indicando se todos os valores são iguais ou não', () => {
        expect(verificaArray([1,1,1,1,1])).toBeTruthy();
    });
    it('O retorno deve ser um booleano indicando se todos os valores são iguais ou não', () => {
        expect(verificaArray([1,1,1,2,1])).toBeFalsy();
    });
  });