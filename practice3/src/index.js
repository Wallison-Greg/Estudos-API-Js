const express = require("express");
const mongoose = require("mongoose")

const app = express();

//ler json
app.use(express.urlencoded({extended: true}));
app.use(express.json())

//rotas
app.get("/", (req, res) => {
    res.send("start")
})

app.listen(3000)