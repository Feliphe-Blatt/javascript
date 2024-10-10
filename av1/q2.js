function palindromo(palavra) {

  let palavraInvertida = '';

  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  if (palavra === palavraInvertida) {
    return 'É um palíndromo';

  } else {
    return 'Não é um palíndromo';
  }
}


const palavra = prompt('Digite uma palavra:');
console.log(palindromo(palavra));
