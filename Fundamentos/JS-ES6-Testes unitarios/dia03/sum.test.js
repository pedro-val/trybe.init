const sum = require('./sum')

test('Verifica soma 4 e 5', () => {
    expect(sum(4,5)).toBe(9);
});
test('Verifica soma 0 e 0', () => {
    expect(sum(0,0)).toBe(0);
});
test('Verifica soma de uma string', () => {
    expect(() => sum(4,'5')).toThrow(Error);
});
test('Verifica soma de uma string', () => {
    try {
        sum(4,'5');
      } catch (e) {
        expect(e.message).toBe('parameters must be numbers');
      }
});