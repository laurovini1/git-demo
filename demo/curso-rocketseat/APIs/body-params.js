const express = require('express')
const app = express()
app.listen('3000')
console.log(("Express Iniciado."));


app.use(express.json())

app.route('/').post( (req, res) => {
    const{nome, cidade} = req.body
    res.send(`Meu nome é ${nome} e minha cidade é ${cidade}`)
})

/*{
	"nome":"Lauro Oliveira",
	"endereco":"Rua Neman Murad, 116, Vila Murad",
	"cidade":"Varginha"
}*/