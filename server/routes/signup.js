const express = require('express')
const router = express.Router()
const knex = require('../../knex');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const signUpQueries = require('../queries/signup_queries.js')

//const { signUpUser } = require('../queries/signup.js')

router.use(express.static('public'))

router.post('/', signUpQueries.signUpUser)

module.exports = router