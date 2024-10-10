let aluno = {

  nome: "João",
  notas: [8, 7.5, 9],

  media: function () {

    let soma = 0;

    for (let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i];
    }

    return soma / this.notas.length;
  }
};


console.log(`O aluno ${aluno.nome} tem uma média de ${aluno.media().toFixed(1)}!`);
