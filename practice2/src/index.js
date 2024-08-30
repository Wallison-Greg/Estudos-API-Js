//dotenv
require("dotenv").config();

//pacotes
const express =  require("express");
const mongoose = require("mongoose");
const rotas = require("./routes/router")

const app =  express();

//ler json
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//modelo
const User = require('./model/User');

//rotas
app.get("/", (req, res) => {
    res.json({msg: "API RestFull"})
})

app.use(rotas)


//porta de acesso e conexão com o banco
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@practice2.mqyoz.mongodb.net/?retryWrites=true&w=majority&appName=practice2`)
    .then(() => {app.listen(process.env.PORT || 3000, console.log("conectado"))})
    .catch((err)=> console.log(err))