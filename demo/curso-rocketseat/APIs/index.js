const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get( (req,res) => res.send("Home"))
app.route('/Sobre').get( (req,res) => res.send("Sobre"))




console.log(("Express Iniciado."));