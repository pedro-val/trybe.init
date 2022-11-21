
const myRemove = require('./exercicio1.js');

describe('Verificador do remove do array', () => {
    it('Remoção do numero 3', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('verifica se nao retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('verifica remoção do numero 5', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

const myFizzBuzz = require('./exercicio2');

describe('Verificando codigo Fizzbum', () => {
    it('verificação de divisor de 5 e 3', () => {
        expect(myFizzBuzz(15)).toBe("fizzbuzz");
    });
    it('verificação divisor de 3', () => {
        expect(myFizzBuzz(9)).toBe("fizz");
    });
    it('verificação divisor de 5', () => {
        expect(myFizzBuzz(20)).toBe("buzz");
    });
    it('verificação de não divisor de 5 e 3', () => {
        expect(myFizzBuzz(22)).toBe(22);
    });
    it('verificação se o valor é um número', () => {
        expect(myFizzBuzz('as')).toBe(false);
    });
});

const {mapString, encode, decode} = require('./exercicio3');


describe('Verificação Encode/Decode', () => {
    it('verifica se são funções', () => {
        expect(encode).toBeInstanceOf(Function);
        expect(decode).toBeInstanceOf(Function);
        expect(mapString).toBeInstanceOf(Function);
    });
    it('Verifica Funcao Encode', () => {
        expect(encode('a e i o u')).toEqual('1 2 3 4 5');
    });
    it('Verifica Funcao decode', () => {
        expect(decode('1 2 3 4 5')).toEqual('a e i o u');
    });
    it('Verificando demais letras', () => {
        expect(encode('a casa caiu')).toEqual('1 c1s1 c135');
    });
    it('Verificando demais letras', () => {
        expect(decode('1 c1s1 c135')).toEqual('a casa caiu');
    });
    it('tamanho da string', () => {
        expect(encode(('a casa caiu')).length).toEqual(('1 c1s1 c135').length);
    });
    it('Verificando demais letras', () => {
        expect(decode(('1 c1s1 c135')).length).toEqual(('a casa caiu').length);
    });
});

const techList = require('./exercicio4');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

