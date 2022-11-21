const getValueByNumber = require('./exercicio3');

test('dado um objeto, retorna o valor da chave', () => {
    const lesson1 = {
        materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã',
      };
    expect(getValueByNumber(lesson1, 'materia')).toBe('Matemática');
    expect(getValueByNumber(lesson1, 'turno')).toBe('manhã');
})