const prompt = require('prompt-sync')();
const num = parseInt(prompt('Escreva um número inteiro: '));

if (!isNaN(num)) {
  if (num % 2 === 0) {
    console.log(`O número ${num} é par`);
  } else if (!num % 2 === 0) {
    console.log(`O número ${num} é impar`);
  }
} else {
  console.log('Por favor, insira um número válido');
}
