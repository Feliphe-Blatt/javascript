function Aluno(nome, matricula) {

    // Object.freeze(this);
    /**
        Object.defineProperty(this, 'nome', {
            enumerable: true,   // Chave visível
            value: nome,        // Valor da chave, pode ser função que retorna algo
            writable: false,    // Se pode alterar valor
            configurable: false // Se pode 'configurar', apagar etc
        });
    */
   
    this.notas = [];
    
    let nomePrivado = nome;
    let matriculaPrivada = matricula;

    Object.defineProperty(this, 'nome', {
        enumerable: true,
        configurable: false,
        get: function(){
            return nomePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'string'){
                throw new TypeError('Entrada inválida!');
            }
            nomePrivado = valor;
        }
    });

    Object.defineProperty(this, 'matricula', {
        enumerable: true,
        configurable: false,
        get: function(){
            return matriculaPrivada;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Entrada inválida!');
            }
            matriculaPrivada = valor;
        }
    });
}

const a1 = new Aluno(33, '1234567890');

a1.nome = 'Joãozinho';

a1.matricula = 9876543210;

console.log(a1.nome, a1.matricula);