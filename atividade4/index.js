const express = require('express')
const app = express()
const calc = require('./util/calculadora')

app.get('/', function(req,res){
    res.send('Página inicial')
})

app.get('/somar/:a/:b', function(req,res){
    let a = parseInt(req.params.a)
    let b = parseInt(req.params.b)
    let soma = calc.somar(a,b)

    res.send('A Soma de '+a+' + '+b+' é '+soma)
})


app.get('/subtrair/:a/:b', function(req,res){
    let a = parseInt(req.params.a)
    let b = parseInt(req.params.b)
    let subtracao = calc.subtrair(a,b)

    res.send('A subtração de '+a+' e '+b+' é '+subtracao)
})

app.get('/multiplicar/:a/:b', function(req,res){
    let a = parseInt(req.params.a)
    let b = parseInt(req.params.b)
    let multiplicacao = calc.multiplicar(a,b)

    res.send('A multiplicação de '+a+' e '+b+' é '+multiplicacao)
})

app.get('/dividir/:a/:b', function(req,res){
    let a = parseInt(req.params.a)
    let b = parseInt(req.params.b)
    let divisao = calc.dividir(a,b)

    res.send('A divisão de '+a+' e '+b+' é '+divisao)
})


const PORT = 8080
app.listen(PORT,function(){
    console.log('app rodando na porta ' + PORT)
})