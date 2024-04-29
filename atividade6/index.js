//configurando o express
const express = require('express')
const app = express()

//configurando o mustache
const mustache = require('mustache-express')
app.engine('html', mustache())
app.set('view engine','html')
app.set('views',__dirname + '/views')

//para usar arquivos estaticos (css, imagens)
app.use(express.static('public'))

//configurando o json()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.render('index.html')
})

app.post('/dados', function(req, res){
    let data = req.body

    res.render('dados.html',{data})
       
})


//configurando o servidor web
const PORT = 8080
app.listen(PORT, function(){
    console.log('App web rodando na porta ' + PORT)
})