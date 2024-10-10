let tarefas = [];

function adicionarTarefas() {

  for (let i = 0; i < 5; i++) {

    let tarefa = prompt(`Insira a tarefa ${i + 1}:`);
    tarefas.push(tarefa);
  }
}

function exibirTarefas() {

  console.log("Tarefas:");

  tarefas.forEach((tarefa, index) => {
    console.log(`${index + 1}. ${tarefa}`);
  });
}

function marcarConcluida() {

  let indice = prompt("Qual tarefa você deseja marcar como concluída? (Digite o número da tarefa)");
  indice = parseInt(indice) - 1;

  if (indice >= 0 && indice < tarefas.length) {

    tarefas.splice(indice, 1);
    console.log("Tarefa concluída com sucesso.");

  } else {
    console.log("Número de tarefa inválido.");
  }
}

adicionarTarefas();
exibirTarefas();
marcarConcluida();
exibirTarefas();