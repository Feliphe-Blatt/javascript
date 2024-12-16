function Aluno(nome, matricula) {

    this.notas = [];

    // Object.freeze(this);
    /**
        Object.defineProperty(this, 'nome', {
            enumerable: true,   // Chave visível
            value: nome,        // Valor da chave, pode ser função que retorna algo
            writable: false,    // Se pode alterar valor
            configurable: false // Se pode 'configurar', apagar etc
        });
    */
   
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        matricula: {
            enumerable: true,
            value: matricula,
            writable: false,
            configurable: false
        }
    });
}

const a1 = new Aluno('Feliphe Blatt', '1234567890');

a1.nome = 'Joãozinho';

a1.matricula = '0987654321';

console.log(a1.nome, a1.matricula);