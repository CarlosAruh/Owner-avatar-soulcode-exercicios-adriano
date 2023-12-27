const prompt = require('prompt-sync')();

const a = Number(prompt('Digite o lado "A" do tringulo: '));

const b = Number(prompt('Digite o lado "B" do tringulo: '));

const c = Number(prompt('Digite o lado "C" do tringulo: '));

function verTri(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) return 'Equilátero';
    if (a === b || a === c || b === c) return 'Isósceles';
    return 'Escaleno';
  }
  return 'Não é um triângulo';
}

if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
  const tipoTri = verTri(a, b, c);
  console.log(`Tipo de triângulo: ${tipoTri}`);
} else {
  console.log('Por favor, insira valores numéricos válidos.');
}
