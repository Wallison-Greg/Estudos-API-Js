const mongoose = require("mongoose");

const User = mongoose.model("User", {
    nome: String,
    idade: Number,
    peso: Number,
    cor: String,
    uf: String
})

module.exports = User;