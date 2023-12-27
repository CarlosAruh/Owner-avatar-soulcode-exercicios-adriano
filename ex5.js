const prompt = require('prompt-sync')();

const nota = parseInt(prompt('Digite a nota: '));

let conceito;

if (!isNaN(nota)) {
  if (nota >= 90 && nota <= 100) {
    conceito = 'A';
  } else if (nota >= 80 && nota <= 89) {
    conceito = 'B';
  } else if (nota >= 70 && nota <= 79) {
    conceito = 'C';
  } else if (nota >= 60 && nota <= 69) {
    conceito = 'D';
  } else if (nota >= 0 && nota <= 59) {
    conceito = 'F';
  } else {
    console.log('Nota inválida. A nota deve estar entre 0 e 100.');
  }

  if (conceito !== undefined) {
    console.log(`A nota ${nota} é equivalente ao conceito ${conceito}`);
  }
} else {
  console.log('Por favor, insira uma nota válida.');
}
