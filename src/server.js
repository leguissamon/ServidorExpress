import express from "express"
import {Database} from "./databases.js"
const app = express()

app.use(express.json())
const database = new Database()

app.get('/', (req, res) =>{
    res.send("voce esta na pagina principal")
})

app.get('/usuario', (req, res) =>{
    const data = database.select("usuario")
    res.status(200).json(data)
})

app.post('/usuario', (req, res) =>{
    const {nome, idade, email} = req.body
   if(nome, idade, email){
    database.insert("usuario", {nome, idade, email} )
      return res.status(201).send("usuario criado")
   }

return res.status(400).send("informações invalidas")


 
})

app.listen(3333, ()=> {
    console.log("Servidor rodadando na porta em http://localhost:3333")
})