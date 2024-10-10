let produtos = [
  { nome: "Produto A", preco: 10.0, quantidade: 5 },
  { nome: "Produto B", preco: 20.0, quantidade: 3 },
  { nome: "Produto C", preco: 15.0, quantidade: 7 }
];

function calcularValorTotalEstoque(produtos) {
  let valorTotal = 0;

  for (let i = 0; i < produtos.length; i++) {

    let valorTotalProduto = produtos[i].preco * produtos[i].quantidade;

    console.log(`O valor total do ${produtos[i].nome} é: R$ ${valorTotalProduto.toFixed(2)}`);

    valorTotal += valorTotalProduto;
  }

  return valorTotal;
}

let valorTotalEstoque = calcularValorTotalEstoque(produtos);
console.log(`\nO valor total do estoque é: R$ ${valorTotalEstoque.toFixed(2)}`);
