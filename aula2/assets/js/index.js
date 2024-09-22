const pessoas = [
  { altura: 1.70, genero: 'Masculino' },
  { altura: 1.60, genero: 'Feminino' },
  { altura: 1.75, genero: 'Masculino' },
  { altura: 1.68, genero: 'Feminino' },
  { altura: 1.80, genero: 'Masculino' },
  { altura: 1.55, genero: 'Feminino' },
  { altura: 1.90, genero: 'Masculino' },
  { altura: 1.65, genero: 'Feminino' },
  { altura: 1.85, genero: 'Masculino' },
  { altura: 1.70, genero: 'Feminino' },
  { altura: 1.75, genero: 'Masculino' },
  { altura: 1.60, genero: 'Feminino' },
  { altura: 1.78, genero: 'Masculino' },
  { altura: 1.62, genero: 'Feminino' },
  { altura: 1.88, genero: 'Masculino' }
];


let maiorAltura = pessoas[0].altura;
let menorAltura = pessoas[0].altura;
let somaAlturaMasculino = 0;
let countMasculino = 0;
let countFeminino = 0;


pessoas.forEach(pessoa => {
  if (pessoa.altura > maiorAltura) maiorAltura = pessoa.altura;
  
  if (pessoa.altura < menorAltura) menorAltura = pessoa.altura;

  if (pessoa.genero === 'Masculino') {
    somaAlturaMasculino += pessoa.altura;
    countMasculino++;

  } else if (pessoa.genero === 'Feminino') {
    countFeminino++;
  }
});

const mediaAlturaMasculino = somaAlturaMasculino / countMasculino;

console.log(`Maior altura: ${maiorAltura}`);
console.log(`Menor altura: ${menorAltura}`);
console.log(`Média de altura dos homens: ${mediaAlturaMasculino.toFixed(2)}`);
console.log(`Número de mulheres: ${countFeminino}`);