

const express = require("express")
const app = express()


//const { router } = require("./routes/filmesRoute");

const filmes = require("./routes/filmesRoute")
app.use("/filmes", filmes)

module.exports = app

