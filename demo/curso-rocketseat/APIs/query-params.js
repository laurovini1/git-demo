const express = require('express')
const app = express()
app.listen('3000')
console.log(("Express Iniciado."));

app.route('/').get((req, res) => res.send(req.query.cidade))

app.route('/about/user').get((req, res) => res.send(req.query))

//localhost:3000?nome=Lauro&cidade=guapé