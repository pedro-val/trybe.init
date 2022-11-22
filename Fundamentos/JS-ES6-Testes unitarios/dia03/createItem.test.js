const createItem = require('./createItem')

describe('a função createItem', () => {
    it('cria um item válido', () => {
        expect(createItem('Pedro', 'Camisa', 10, 20)).toEqual({
            name: 'Pedro',
            quantity: 20,
            unit: 'Camisa',
            price: 10,
          });
    });
    it('utiliza zero como quantidade padrão', () => {
        expect(createItem('Pedro', 'Camisa', 10, 0)).toEqual({
            name: 'Pedro',
            quantity: 0,
            unit: 'Camisa',
            price: 10,
            });
    });
    it('Lança um erro quando não recebe parâmetros', () => {
        expect(() => createItem()).toThrow(Error);
    });
    it('Lança um erro se o nome do item não é uma string', () => {
        expect(() => createItem(Pedro, 'Camisa', 10, 0)).toThrow(Error);
    });
    it.todo('Lança um erro se o preço é negativo');
    it.todo('Lança um erro se o preço é zero');
  });