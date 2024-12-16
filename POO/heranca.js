// Produto: aumento, desconto
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(porcentagem){
    this.preco += this.preco * (porcentagem * 0.01);
};
Produto.prototype.desconto = function(porcentagem){
    this.preco -= this.preco * (porcentagem * 0.01);
};

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);

Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('xicara', 100, 'porcelana');
console.log(caneca.nome, caneca.preco, caneca.material);

caneca.aumento(10);
console.log(caneca.nome, caneca.preco, caneca.material);


// Sobrescrevendo original do pai
Caneca.prototype.aumento = function (valor) {
    this.preco = 1;
};
caneca.aumento(10);
console.log(caneca.nome, caneca.preco, caneca.material);
