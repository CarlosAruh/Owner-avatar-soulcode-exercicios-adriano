const prompt = require('prompt-sync')();

const rendaMensal = Number(prompt('Digite a renda mensal do cliente: '));
const idadeCliente = Number(prompt('Digite a idade do cliente: '));
const historicoCredito = prompt(
  'Possui bom histórico de crédito? (sim ou nao)'
).toLowerCase();

const rendaMinima = 1000;
const idadeMinima = 18;
const historicoCreditoPositivo = 'sim';

if (!isNaN(rendaMensal) && !isNaN(idadeCliente)) {
  if (
    rendaMensal >= rendaMinima &&
    idadeCliente >= idadeMinima &&
    historicoCredito === historicoCreditoPositivo
  ) {
    console.log('O cliente é elegível para o empréstimo.');
  } else {
    console.log('O cliente não é elegível para o empréstimo.');
  }
} else {
  console.log('Por favor, insira valores válidos para renda e idade.');
}
