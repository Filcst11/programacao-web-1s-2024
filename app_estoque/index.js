const express = require('express')
const estoque = require('./src/estoque')
const app = express()

app.get('/cadastrar/:id/:nome/:qtd',function(req, res){
    let id = req.params.id
    let nome = req.params.nome
    let qtd = parseInt(req.params.qtd)
    
    let p = estoque.criarProduto(id,nome,qtd)
    
    estoque.adicionarProduto(p)

    res.send(p)
})

app.get('/listar',function(req,res){
    
    res.send(estoque.listarProdutos())
})

app.get('/remover/:id',function(req,res){
    
    let id = req.params.id
    estoque.removerProduto(id)

    res.send(`Produto com id: ${id} foi removido`)
})

const PORT = 8080
app.listen(PORT, function(){
    console.log('app rodando na porta ' + PORT)
})