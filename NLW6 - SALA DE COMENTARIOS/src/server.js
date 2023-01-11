//Iniciando o servidor
const express = require('express')
//importando os arquivos para que o servidor veja as paginas
const route = require('./route')

const path = require('path') //Caminho do meu projeto no computador

const server = express()





//Express essa é a nossa view engine! O que o novegador mostra-ra
 
server.set('view engine', 'ejs') //express a nossa view vai ser a extensão ejs
server.set('views', path.join(__dirname, 'views'))

server.use(express.static("Public")); //Server, utilize os arquivos que estão dentro dessa pasta


server.use(express.urlencoded({extendend: true}))

//No seguinte trexo falo para o servidor utilizar o seguinte arquivo
server.use(route)

//listanto as portas que o server utilizará
server.listen(3000, () => console.log("RODANDO"))


