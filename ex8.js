const prompt = require('prompt-sync')();

const ano = Number(prompt('Digite o ano que deseja consultar: '));

function ehBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

if (!isNaN(ano)) {
  if (ehBissexto(ano)) {
    console.log(`${ano} é um ano bissexto.`);
  } else {
    console.log(`${ano} não é um ano bissexto.`);
  }
} else {
  console.log('Por favor, insira um ano válido.');
}
