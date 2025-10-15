import express from "express"
const app = express()

app.use(express.json())
const usuarios = []

app.get('/', (req, res) =>{
    res.send("voce esta na pagina principal")
})

app.get('/usuario', (req, res) =>{
    res.status(200).json(usuarios)
})

app.post('/usuario', (req, res) =>{
    const {nome, idade} = req.body
console.log(nome, idade)
usuarios.push({nome, idade})
console.log(usuarios)

    res.status(201).send("usuario criado")
})

app.listen(3333, ()=> {
    console.log("Servidor rodadando na porta em http://localhost:3333")
})