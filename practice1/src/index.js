const express = require("express");
const app =  express();


app.get('/', (req, res)=> {
    res.send("vamos la")
})

app.listen(3000, ()=> {
    console.log("app rodando")
})