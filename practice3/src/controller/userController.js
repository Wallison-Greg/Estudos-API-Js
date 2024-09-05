require("dotenv").config();

//pacotes
const brcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Db model
const DbUser = require("../model/User"); 
