const mongoose = require("mongoose");

const Produto = mongoose.model("Produto", {
    name: String,
    desc: String,
    peso: Number,
    preco: Number
})

module.exports = Produto;