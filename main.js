function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.exibirDetalhes = function() {
    console.log(`Produto: ${this.nome}, Preço: R$ ${this.preco}`);
}

Produto.prototype.categoria = function() {
    throw new Error("Método 'categoria' precisa ser implementado.");
}

function Eletronico(nome, preco, marca) {
    Produto.call(this, nome, preco); 
    this.marca = marca;
}

Eletronico.prototype = Object.create(Produto.prototype);
Eletronico.prototype.constructor = Eletronico;

Eletronico.prototype.categoria = function() {
    console.log("Categoria: Eletrônicos");
}

function Roupas(nome, preco, tamanho) {
    Produto.call(this, nome, preco); 
    this.tamanho = tamanho;
}

Roupas.prototype = Object.create(Produto.prototype);
Roupas.prototype.constructor = Roupas;

Roupas.prototype.categoria = function() {
    console.log("Categoria: Roupas");
}

const eletronico1 = new Eletronico("Smartphone", 1500, "Samsung");
const roupa1 = new Roupas("Camiseta", 49.99, "M");
const eletronico2 = new Eletronico ("Notebook", 3000, "Lenovo");

eletronico1.exibirDetalhes();
eletronico1.categoria();

eletronico2.exibirDetalhes();
eletronico2.categoria();

roupa1.exibirDetalhes();
roupa1.categoria();




