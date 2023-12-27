const prompt = require('prompt-sync')();

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroMinimo = 1;
const numeroMaximo = 100;
const numeroEscolhido = gerarNumeroAleatorio(numeroMinimo, numeroMaximo);

let tentativas = 0;
let palpite;

console.log('Bem-vindo ao jogo de adivinhação!');
console.log(
  `Tente adivinhar o número entre ${numeroMinimo} e ${numeroMaximo}.`
);

while (palpite !== numeroEscolhido) {
  palpite = Number(prompt('Digite o seu palpite: '));

  if (isNaN(palpite)) {
    console.log('Por favor, insira um número válido.');
  } else {
    tentativas++;

    if (palpite === numeroEscolhido) {
      console.log(
        `Parabéns! Você acertou o número ${numeroEscolhido} em ${tentativas} tentativas.`
      );
    } else if (palpite > numeroEscolhido) {
      console.log('Tente um número menor.');
    } else {
      console.log('Tente um número maior.');
    }
  }
}
