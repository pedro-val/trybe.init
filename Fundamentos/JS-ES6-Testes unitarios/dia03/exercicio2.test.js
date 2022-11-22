const { info, printMessage } = require('./exercicio2.js')

test('veririca se existe a chave personagem', () => {
    expect(printMessage(info)).toBe('Boas vindas, Margarida')
});

test('veririca se existe a chave personagem', () => {
    try {
        printMessage('asd');
    }
    catch (e) {
        expect(e.message).toBe('Não existe propriedade personagem');
    }    
});