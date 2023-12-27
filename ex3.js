const prompt = require('prompt-sync')();
const num1 = Number(prompt('Escreva o primeiro número: '));

const operacao = prompt('Qual operação deseja fazer (+, -, *, /): ');

const num2 = Number(prompt('Escreva o segundo número: '));

let resultado;

if (!isNaN(num1) && !isNaN(num2)) {
  if (operacao === '+') {
    resultado = num1 + num2;
  } else if (operacao === '-') {
    resultado = num1 - num2;
  } else if (operacao === '*') {
    resultado = num1 * num2;
  } else if (operacao === '/') {
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      console.log('Erro: Não é possível dividir por zero.');
    }
  } else {
    console.log('Operação inválida.');
  }

  if (resultado !== undefined) {
    console.log(`O resultado da operação é: ${resultado.toFixed(2)}`);
  }
} else {
  console.log('Por favor, insira números válidos.');
}
