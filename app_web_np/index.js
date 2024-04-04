const express = require('express')
const app = express()
const math = require('./util/matematica')

app.get('/',function(req,res){
    res.send('pagina inicial')
})

app.get('/ola/:n', function(req,res){
    let n = req.params.n;
    res.send('Olá ' + n)
})

app.get('/verifica-numero-primo/:n', function(req, res){
    let n = req.params.n
    let eprimo = math.verificarNumeroPrimo(n)
    if(eprimo == true){
        res.send('O Número '+n+' é primo')
    }else{
        res.send('O número '+n+' não é primo')
    }
})




const PORT = 8080
app.listen(PORT,function(){
    console.log('app rodando na porta', PORT)
})