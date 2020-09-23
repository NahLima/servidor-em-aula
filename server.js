// const { response } = require('express')
// const express = require('express')

//const app = express()não precisa mais desse 


const app = require("./src/app")
const PORT = 3001

// app.get('/' , function (request,response){
//     response.send("Olá Mundo")

// })
// As rotas agora ficam nos filmes - por isso não precisa mais. 

app.listen(PORT, function(){
    console.log("O nosso app esta rodando na porta " + PORT)
})
