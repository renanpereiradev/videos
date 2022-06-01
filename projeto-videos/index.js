const express = require('express')
const app = express()
const port = 3000

app.use(express.static('projeto-videos'))
app.use("/imagens",express.static('imagens'))
app.use("/js",express.static("js"))

app.get('/Home',(req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/Produtos', (req,res) => {
    res.sendFile(`${__dirname}/docs/produtos.html`)
})

app.get('/Contato', (req,res) => {
    res.sendFile(`${__dirname}/docs/contato.html`)
})

app.get('/Promocoes', (req,res) => {
    res.sendFile(`${__dirname}/docs/promocoes.html`)
})

app.get('/Carrinho', (req,res) => {
    res.sendFile(`${__dirname}/docs/carrinhoCompra.html`)
})

app.get('/Login', (req,res) => {
    res.sendFile(`${__dirname}/docs/login.html`)
})

app.get('/Cadastro', (req,res) => {
    res.sendFile(`${__dirname}/docs/cadastro.html`)
})

app.get('/Produto', (req,res) => {
    res.sendFile(`${__dirname}/docs/singlePreferencia.html`)
})

app.listen(port, () => {
    console.log("Servidor Online")
})