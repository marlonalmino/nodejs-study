const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

//Postagem
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

/* Utilizar o comando sync apenas uma vez,
-- senão ele irá criar a tabela sempre que
-- for executado
Postagem.sync({force: true})*/

// !!! INSERIR NO BANCO DE DADOS !!!
/*Postagem.create({
    titulo: 'UM TÍTULO QUALQUER',
    conteudo: 'Teste teste teste teste teste teste'
})*/

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

/* Utilizar o comando sync apenas uma vez,
-- senão ele irá criar a tabela sempre que
-- for executado
Usuario.sync({force: true})*/

// !!! INSERIR NO BANCO DE DADOS !!!
/*Usuario.create({
    nome: 'Marlon',
    sobrenome: 'Almino',
    idade: 22,
    email: 'teste@teste.com'
})*/