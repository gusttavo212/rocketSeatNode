const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')


//Iniciando o app
const app = express()


//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {useNewUrlParser: true})

requireDir('./src/models')

const Product = mongoose.model('Product')


//Primeira Rota
app.get('/',(req,res) => {//Arrow Function
    
    Product.create({
        title: 'Reactive Native',
        description: 'Biuld native apps with React',
        url: 'http://github.com/facebook/react-native'        
    })

    return res.send('Olá cara')
})//Rota raiz


app.listen(3001)

