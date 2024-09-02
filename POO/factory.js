function fabricaDeAluno(nome, matricula){
    return {
        nome,
        matricula,

        get view(){
            return `\nAluno: "${this.nome}"\nMatrícula: ${this.matricula}\n`;
        }
    }
}

const aluno1 = fabricaDeAluno('Feliphe Blatt', 1234567890);

console.log(aluno1.view);