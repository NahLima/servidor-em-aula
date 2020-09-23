const { request } = require("express")
const filmes = require("../model/filmes.json")

const getAll = (request,response) => {
    console.log(request.url) // nickname de request 
    response.status(200).send(filmes) // status ok
}


// ajuda a gente exportar a função getAll significa que vai retornar tudo sem filtro
module.exports = { 
    getAll
}