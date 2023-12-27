const readline = require('readline-sync');

const input = readline.question('Escreva um número inteiro: ');
const num = parseInt(input);

if (!isNaN(num)) {
  if (num > 0) {
    console.log(`O número ${num} é positivo`);
  } else if (num < 0) {
    console.log(`O número ${num} é negativo`);
  } else {
    console.log('Número 0');
  }
} else {
  console.log('Por favor, insira um número válido');
}
