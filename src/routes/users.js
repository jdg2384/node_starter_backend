const router = require('express').Router();
const { getAllUsers, getOneUser, patchUser, deleteUserFunc } = require('../queries/user_queries.js')

router.get('/', getAllUsers)

router
    .get('/:id', getOneUser)
    .patch('/:id', patchUser)
    .delete('/:id', deleteUserFunc)

module.exports = router