const router = require('express').Router();g
const { getAllUsers, getOneUser } = require('../queries/user_queries.js')

router.get('/', getAllUsers)
router.get('/:id', getOneUser)

module.exports = router