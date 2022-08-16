const express = require('express')
const app = express()
app.listen('3000')
console.log(("Express Iniciado."));

app.route('/:indentificador').delete( (req, res) => {
    res.send(req.params.indentificador)
})