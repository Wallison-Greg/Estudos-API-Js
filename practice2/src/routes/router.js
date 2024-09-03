const express = require('express');
const route = express.Router();
const server = require('../controller/UserController');

route.post("/user", server.createUser);
route.get("/user", server.getAllUsers);
route.get("/user/:cpf", server.getUser);
route.patch("/user/:cpf", server.updateUser);
route.delete("/user/:cpf", server.deleteUser);

module.exports = route;