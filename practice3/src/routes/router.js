const express = require('express');
const route = express.Router();
const server = require("../controller/userController")

route.post("/user", server.userAuth);

module.exports = route