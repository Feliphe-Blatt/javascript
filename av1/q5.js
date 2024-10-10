function gerarTabelaMultiplicacao(numero) {
  if (typeof numero !== "number") {
    console.log("Por favor, insira um número válido.");
    return;
  } else if (numero <= 0) {
    console.log("Por favor, insira um número positivo.");
    return;
  }

  console.log(`Tabela de multiplicação do ${numero}:`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}


gerarTabelaMultiplicacao(5);
