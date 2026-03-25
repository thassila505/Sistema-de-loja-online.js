class produto{
    constructor(nome, preco){
        this.preco = preco
    }

}

class carrinho{
    constructor(){
        this.produtos = []
    }
    adicionarProdutos(produtos){
        this.produtos.push(produto)
    }
    listarProdutos (){
        return this.produtos
    }
    calcularTotal(){
        return this.produtos.reduce((total, p) => total + p.preco, 0)
    }
}

class cliente{}

class pagamento{}

class pedido{}
