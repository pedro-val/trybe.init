const {professionalBoard, searchEmployee} = require('./bonus.js');

describe('teste no exercicio bonus', () => {
    it('teste se da o retorno esperado', () => {
        expect(searchEmployee('4678-2', 'firstName')).toEqual('Paul')
    });
    it('teste de erro caso detail nao exista', () => {
        expect(() => searchEmployee('4678-2')).toThrow(Error);
    })
    it('teste de erro caso detail nao exista', () => {
        expect(() => searchEmployee('46723238-2', 'firstName')).toThrow(Error);
    })
});