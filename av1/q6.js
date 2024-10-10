let pessoas = [];


function adicionarPessoas() {

  for (let i = 0; i < 5; i++) {

    let nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
    let idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`));

    temp = {
      nome: nome,
      idade: idade
    };

    pessoas.push(temp);
  }
}


function exibirMaioresDeIdade() {
  
  for (let i = 0; i < pessoas.length; i++) {
    if (isNaN(pessoas[i].idade)) {
      alert("Idade inválida, tente novamente.");
      return;
    }
  }

  let maiorDeIdade = false;

  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade > 18) {
      maiorDeIdade = true;
    }
  }
  if (!maiorDeIdade) {
    console.log("Nenhuma pessoa com mais de 18 anos.");
    return;
  }

  console.log("Pessoas com mais de 18 anos:");
  for (let i = 0; i < pessoas.length; i++) {
    console.log(`Nome: ${pessoas[i].nome}, Idade: ${pessoas[i].idade}`);
  }
}


adicionarPessoas();
exibirMaioresDeIdade();