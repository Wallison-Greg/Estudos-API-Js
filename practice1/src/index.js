const express = require("express");
const mongoose = require("mongoose")
const app =  express();

//middleware para ler json
app.use( express.urlencoded( {extended:true} ) )
app.use(express.json())

app.get('/', (req, res)=> {
    res.send("vamos la")
})

//connect db
mongoose.connect(`mongodb+srv://wallisongregorio2022:EbCvSOUAKnV0fEvn@cluster0.f4him.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
    console.log("conectado com sucesso")

    //porta de acesso 
    app.listen(3000)
}).catch((err) => console.log(err))

