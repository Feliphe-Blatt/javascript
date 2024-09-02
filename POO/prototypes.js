function escopo(){
    function Pessoa(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
        // this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
    }
    Pessoa.prototype.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`;
    };

    const p1 = new Pessoa('feliphe', 'blatt');
    const p2 = new Pessoa('joãozinho', 'da Silva');

    // console.log(p1.nomeCompleto());
    
    const p3 = new Object();
    p3.idade = 28;
    
    const p4 = new Object();
    p4.idade = 28;
    
    // Definindo o 'pai' de p3 e p4
    Object.setPrototypeOf(p3, Pessoa.prototype);
    Object.setPrototypeOf(p4, p1);

    // Encadeando protótipos
    console.dir(p3);

    console.log(p3.nomeCompleto(), p3.nome); // não foram definidos valor de nome e sobrenome, mas atributos existem!

    console.log(p4.nomeCompleto(), p4.nome);

    // Criando protótipo 'direto' ao criar
    const p5 = Object.create(p1, {
        idade: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: 28
        }
    });
    console.log(p5.nomeCompleto(), p5.nome, p5.idade);
}
escopo();