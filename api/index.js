const express = require('express')
const app = express()
const config = require('config')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Linha para ser revisada
// const routes = require('/routes/fornecedores')
// app.use('/api/fornecedores', routes)

app.listen(config.get('api.port'), () => console.log('listening on'))