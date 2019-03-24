const modulo1 = require('../modulo1');

describe('Testes de todas as funções do modulo', () => {
it('testando o modulo se esta retornando o valor correto', () => {
    expect(modulo1.func1(10)).toBe(11);
  });
  it('testando se a funcao se esta retornando o valor correto', () => {
    expect(modulo1.func2(11,10)).toBe(2
      );
  });
  it('testando se a func3 retorna oi', () => {
    expect(modulo1.func3()).toBe('oi');
  })
});