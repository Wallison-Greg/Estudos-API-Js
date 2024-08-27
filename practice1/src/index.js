const express = require("express");
const mongoose = require("mongoose")
const app =  express();

//middleware para ler json
app.use( express.urlencoded( {extended:true} ) )
app.use(express.json())

//conectando ao mondoDb Atlas
mongoose.connect(`mongodb+srv://wallisongregorio2022:EbCvSOUAKnV0fEvn@cluster0.f4him.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
    console.log("conectado com sucesso")

    //porta de acesso 
    app.listen(3000)
}).catch((err) => console.log(err))

//criando o modelo no banco de dados 
const cachorros = mongoose.model('Dog', {
    nome: String,
    raca: String,
    peso: Number
})

//enviando os dados da requisição 
app.post('/', async(req, res) => {
    const myDog = new cachorros({
        nome: req.body.nome,
        raca: req.body.raca,
        peso: req.body.peso
    })

    await myDog.save()

    res.send(myDog)
})

//resgatando os dados da requisição
app.get('/', async(req, res)=> {

    const pets = await cachorros.find()

    res.send(pets)
})

//resgatando o dado da requisição pelo id 
app.get('/:id', async(req, res)=> {
    const pet = await cachorros.findById(req.params.id)

    res.send(pet)
})

//atualizando os dados de acordo com o id 
app.patch('/:id', async(req,res) => {
    const newPet = {
        nome: req.body.nome,
        raca: req.body.raca,
        peso: req.body.peso
    }

    await cachorros.updateOne({_id: req.params.id}, newPet)
    res.send("dados atualizados")
})
