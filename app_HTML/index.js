const express = require("express")
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('html',mustacheExpress())
app.set('view engine','html')
app.set('views',__dirname + '/views')

app.get('/',function(req,res){
    let nome = "Felipe"
    
    res.render('index.html', {nome})
})

app.get('/contato', function(req, res){
    let telefone = '(61)99291-6996'
    let email = 'filcosta11@gmail.com'
    let link = 'https://filcosta.com.br'
   
    res.render('contato.html', {telefone, email, link})
})




















const PORT = 8080
app.listen(PORT,function(){
    console.log("App rodando na porta "+PORT)
})