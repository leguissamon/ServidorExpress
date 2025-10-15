import express from "express"
import {Database} from "../databases.js"
const app = express()

app.use(express.json())
const database = new Database()

const produtos = []
app.get('/', (req, res) =>{
    res.send("voce esta na pagina principal")
})

app.get('/produto', (req, res) =>{
    const data = database.select("produto")
    res.status(200).json(data)
})

app.post('/produto', (req, res) =>{
    const {nome, valor} = req.body
   if(nome, valor){
    database.insert("produto", {nome, valor} )
      return res.status(201).send("produto criado")
   }

return res.status(400).send("informações invalidas")


 
})

app.listen(3333, ()=> {
    console.log("Servidor rodadando na porta em http://localhost:3333")
})