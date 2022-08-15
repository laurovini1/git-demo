const express = require('express')
const app = express()
app.listen('3000')
console.log(("Express Iniciado."));



app.use(express.json())

let author = "Lauro"

app.route('/').get( (req,res) => res.send(author))


app.route('/').put( (req,res) => {
    author = req.body.author
    res.send(author)
} )






