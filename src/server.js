import express from "express"
const app = express()

app.get('/', (req, res) =>{
    res.send("voce esta na pagina principal")
})

app.post('/', (req, res) =>{
    res.send("voce esta na pagina principal usando post")
})

app.listen(3333, ()=> {
    console.log("Servidor rodadando na porta em http://localhost:3333")
})