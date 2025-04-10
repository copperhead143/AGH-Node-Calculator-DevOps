// public/script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.hasAttribute('data-value')) {
      // Dodajemy cyfrę do bieżącego wejścia
      currentInput += button.getAttribute('data-value');
      display.value = currentInput;
    } else if (button.hasAttribute('data-op')) {
      // Dodajemy operator (otaczamy spacjami, by wizualnie oddzielić)
      currentInput += ' ' + button.getAttribute('data-op') + ' ';
      display.value = currentInput;
    }
  });
});

document.getElementById('clear').addEventListener('click', () => {
  currentInput = '';
  display.value = '0';
});

document.getElementById('equals').addEventListener('click', () => {
  try {
    // Używamy eval do obliczenia wyrażenia – pamiętaj, że eval nie jest zalecane w produkcji!
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (err) {
    display.value = 'Error';
    currentInput = '';
  }
});
