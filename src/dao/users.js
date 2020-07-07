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








module.exports = {
    getUsers,
    getUser
}