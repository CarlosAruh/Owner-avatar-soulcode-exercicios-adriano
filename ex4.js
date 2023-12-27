const prompt = require('prompt-sync')();
const idade = parseInt(prompt('Escreva sua idade: '));

let mensagem = isNaN(idade)
  ? 'Por favor, digite um número.'
  : idade >= 0 && idade <= 2
  ? 'Você é um Bebê'
  : idade > 3 && idade <= 12
  ? 'Você é uma Criança'
  : idade > 13 && idade <= 17
  ? 'Você é um Adolescente'
  : idade > 18 && idade <= 60
  ? 'Você é um Adulto'
  : idade > 61 && idade <= 130
  ? 'Você é um Idoso'
  : 'Idade Inválida';

console.log(`Você possui ${idade} anos e ${mensagem}`);
