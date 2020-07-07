const router = require('express').Router();
const {signUpUser} = require('../queries/signup_queries.js')


router.use('/', signUpUser)

module.exports = router