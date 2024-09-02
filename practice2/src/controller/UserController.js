const DbUser = require("../model/User");
const express = require('express');
//const { default: mongoose } = require("mongoose");

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

module.exports = {createUser, getAllUsers, getUser}