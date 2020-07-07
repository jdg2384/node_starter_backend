const knex = require('../../knex');

// Get All Users
const getUsers = async id => 
    await knex
    .select('id','email')
    .from('users')
    .then(data => data);

// Get One User
const getUser = async id => 
    await knex
    .where('id',id)
    .select('id','email')
    .from('users')
    .then(data => data[0]);

// Update User
const updateUser = async req => 
    await knex('users')
    .where('id',req.params.id)
    .update({
        email: req.body.email,
    })
    .returning(['id','email'])

const deleteUser = async id =>
    knex('users')
    .where('id',id)
    .returning(['id','email'])
    .del()

module.exports = {
    getUsers,
    getUser,
    updateUser,
    deleteUser
}