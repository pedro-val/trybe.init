const getValueByNumber = require('./exercicio3');

test('dado um objeto e um numero de chave, retorna o valor da chave', () => {
    const lesson1 = {
        materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã',
      };
    expect(getValueByNumber(lesson1, '0')).toBe('Matemática');
    expect(getValueByNumber(lesson1, '3')).toBe('manhã');
})