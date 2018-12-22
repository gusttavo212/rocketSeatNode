const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')


//Iniciando o app
const app = express()
//Permitir o envio de json
app.use(express.json())


//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true})

requireDir('./src/models')


//Primeira rota
//toda vez que receber uma rota apartir de api mande para routes
app.use('/api', require("./src/models/routes"))

app.listen(3001)//HTTPS porta 403

