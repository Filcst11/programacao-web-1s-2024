let produtos = []


function criarProduto(id,nome,qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p
}

function adicionarProduto(p){
    produtos.push(p)
}

function listarProdutos(){
    return produtos
}

function removerProduto(id){
    produtos = produtos.filter((p) => {
        return p.id != id
    })
}

function alteraProduto(idEscolha,novaQtd){
    let i = parseInt(0)
    while(produtos[i] !== undefined){
        if(produtos[i].id == idEscolha){
            break
        }
        i +=1
    }
    if(produtos[i] === undefined){
        return false
    }else{
        produtos[i].qtd = novaQtd
        return true
    }
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    alteraProduto
}