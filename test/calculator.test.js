// test/calculator.test.js
import { add, subtract, multiply, divide } from '../src/calculator.js';

describe('Funkcje kalkulatora', () => {
  test('dodawanie: 2 + 3 powinno dać 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('odejmowanie: 5 - 3 powinno dać 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('mnożenie: 4 * 3 powinno dać 12', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('dzielenie: 10 / 2 powinno dać 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('dzielenie przez zero powinno rzucić błąd', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero');
  });
});
