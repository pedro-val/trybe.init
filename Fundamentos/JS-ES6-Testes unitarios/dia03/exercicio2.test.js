const { info, printMessage } = require('./exercicio2.js')

test('veririca se existe a chave personagem', () => {
    expect(printMessage(info)).toBe('Boas vindas, Margarida')
});

test('verifica chave', () => {
    expect(info).toHaveProperty('personagem');
});

describe('verifica presença da sentença Boas vindas', () => {
    it('verifica se existe dentro do return', () => {
        expect(printMessage(info)).toMatch(new RegExp('Boas vindas,'));
    });
    it('verifica no retorno normal', () => {
        expect(printMessage(info)).toMatch('Boas vindas,');
    });    
});

test('verificação de erro caso input invalido', () => {
    expect(() => printMessage('info')).toThrow(Error);
});