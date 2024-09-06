require("dotenv").config();

//pacotes
const brcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {schema} = require("../validation/userValidation")

//Db model
const DbUser = require("../model/User"); 

const userAuth = async (req, res) => {

    try {
        //pegando os dados da requisição
        let data = req.body

        //validando os dados
        await schema.validate(data);

        //verificando a igualdade das senhas
        if(data.pass !=  data.confirmPass){
            res.status(422).json({msg: "as sehas devem ser iguais"})
            return
        }

        //verificando se o usuario ja foi cadastrado
        const userExists = await DbUser.findOne({email: data.email})

        if(userExists){
            res.status(422).json({msg: "email ja cadastrado, utilize outro email"});
            return
        }

        //cripitografando a senha 
        const salt = await brcrypt.genSalt(12);
        const passHash = await brcrypt.hash(data.pass, salt);

        //indexando os valores em variaveis para serem enviados ao banco de dados 
        const user = new DbUser({ 
            name: data.name, 
            emai: data.email, 
            pass: passHash, //passando a senha com segurança
        })


        await user.save();
        res.status(201).json({msg: "usuario cadastrado com sucesso"});
        
    } catch (error) {
        res.status(500).json({errors: error.message})
    }
}

module.exports= {userAuth}
