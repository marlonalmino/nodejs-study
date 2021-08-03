const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

// Config

    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // Conexão com o banco de dados MySql
    const sequelize = new Sequelize('test', 'root', 'admin', {
        host: 'localhost',
        dialect: 'mysql'
    })
    
// Rotas
    app.get('/cad', function(req, res) {
        res.render('formulario')
    })

app.listen(8081, function(){
    console.log('Servidor rodando na URL http://localhost:8081')
})