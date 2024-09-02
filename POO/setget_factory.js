function criaAluno(nome, matricula){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        },
        get matricula(){
            return matricula;
        },
        set matricula(valor){
            matricula = valor;
        }
    };
}

const a1 = criaAluno('feliphe blatt', 1234567890);
const a2 = {...a1};

console.log(a1.nome, a1.matricula);

a2.nome = 'Joãozinho';
a2.matricula = 9876543210;

for(let [chave, valor] of Object.entries(a2)){
    console.log(`${chave}: ${valor}`);
}