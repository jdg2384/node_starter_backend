const router = require('express').Router();
const {signUpUser} = require('../queries/signup_queries.js')


router
    .post('/', signUpUser)

module.exports = router