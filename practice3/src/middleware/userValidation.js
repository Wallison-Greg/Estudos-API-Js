const DbUser = require("../model/User");
const yup = require("yup")

export const userValidation = async (req, res, next) => {

    let data = req.body

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

    if(pass !=  confirmPass){
        res.status(422).json({msg: "as sehas devem ser iguais"})
        return
    }

    try {
        
        await schema.validate(data)

        next();
    } catch (error) {
        return res.status(400).json({
            error: true,
            message: error.errors
        })
    }
}