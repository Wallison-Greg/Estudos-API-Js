const DbUser = require("../model/User");

const createUser = async (req, res) => {

    const {nome, idade, peso, cor, cpf} = req.body

    //validando os dados 

    if(!nome){
        res.status(422).json({msg: "O nome e obrigatorio!"});
        return
    }
    if(!idade){
        res.status(422).json({msg: "O nome e obrigatorio!"});
        return
    }
    if(!peso){
        res.status(422).json({msg: "O nome e obrigatorio!"});
        return
    }
    if(!cor){
        res.status(422).json({msg: "O nome e obrigatorio!"});
        return
    }
    if(!cpf){
        res.status(422).json({msg: "O nome e obrigatorio!"});
        return
    }

    //verificando se o cpf ja foi cadastrado
    const userExists = await DbUser.findOne({cpf: cpf});

    if(userExists){
        res.status(422).json({msg: "cpf ja cadastrado, utilize outro cpf"});
        return
    }

    try {
        
        const user = new DbUser({ nome, idade, peso, cor, cpf });

        await user.save();

        res.status(201).json({msg: "cadastro realizado com sucesso"});

    } catch (error) {
        res.status(500).json({err: error});
    }

}

const getAllUsers = async (req, res) => {
    try {
        
        const allUser = await DbUser.find()
        res.status(200).json({users: allUser})

    } catch (error) {
        res.status(500).json({err: error});
    }
}

const getUser = async (req, res) => {

    const {cpf} = req.params

    try {

        const user = await DbUser.findOne({cpf: cpf})

        res.status(200).json({user: user});
 
    } catch (error) {
        res.status(500).json({err: error});
    }
}

const updateUser = async (req, res) => {
    const {cpf} = req.params
    const {nome, idade, peso, cor} = req.body

    try {

        await DbUser.updateOne({cpf: cpf}, {
            nome: nome,
            idade: idade,
            peso: peso,
            cor: cor
        })

        res.status(200).json({msg: "dados atualizados com sucesso"})
        
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const deleteUser = async (req, res) => {
    const {cpf} = req.params

    //verificando se o cpf e valido
    const userExists = await DbUser.findOne({cpf: cpf});

    if(!userExists){
        res.status(401).json({msg: "por favor insira um cpf valido"});
        return
    }

    try {

        await DbUser.deleteOne(userExists)

        res.status(200).json({msg: "usuario deletado do sistema"})
        
    } catch (error) {
        res.status(500).json({msg: error})
    }


}

module.exports = {createUser, getAllUsers, getUser, updateUser, deleteUser}