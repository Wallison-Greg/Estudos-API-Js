//dotenv
require("dotenv").config();

//pacotes
const express = require("express");
const mongoose = require("mongoose");
const rotas = require("./routes/router")

const app = express();

//ler json
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//rotas
app.use(rotas);

//conexão db
mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.ir4jc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {app.listen(3000, console.log("conectado"))})
    .catch((err) => console.log(err))

