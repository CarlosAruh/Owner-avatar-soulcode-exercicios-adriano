const prompt = require('prompt-sync')();

const valor = Number(prompt('Digite o valor: '));

const desc = Number(prompt('Digite a porcentagem do desconto: '));

if (!isNaN(valor) && !isNaN(desc)) {
  const valorDesc = (desc / 100) * valor;
  const precoFinal = valor - valorDesc;
  console.log(`O valor com o desconto é ${precoFinal}`);
}
