const yup = require("yup")

const schema = yup.object().shape({
    name: yup.string({erro: "por favor insira um nome!"})
        .required({erro: "o nome deve ter no minimo 3 caracteres"})
        .min(3),
    email: yup.string({erro: "por favor insira um email!"})
        .email({erro: "insira um email valido"})
        .required(),
    pass: yup.string({erro: "por favor insira uma senha!"})
        .required({erro: "a senha deve ter no minimo 6 caracteres"})
        .min(6)
})

module.exports= schema;