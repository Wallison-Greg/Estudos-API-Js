const mongoose = require("mongoose");

const User = mongoose.model("User", {
    nome: String,
    idade: Number,
    peso: Number,
    cor: String,
    cpf: String
})

module.exports = User;