'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../../knex');
const _ = require('lodash');
const { getUsers, getUser } = require('../dao/users')

// Get All
const getAllUsers = async (req,res,next) => {
    try {
        const data = await getUsers()
        if (!_.isEmpty(data)) {
            res.send(data)
        } else {
            res.status(404).send({ message: 'No data to return' })
        }
    } catch (err) {
        console.error('err', err);
        res.status(500).send({ message: `Internal Server ${err}` });
    }
}

// Get One User
const getOneUser = async (req,res,next) => {
    try {
        const data = await getUser(req.params.id)
        if (!_.isEmpty(data)) {
            res.send(data)
        } else {
            res.status(404).send({ message: 'No data to return' })
        }
    } catch (err) {
        console.error('err', err);
        res.status(500).send({ message: `Internal Server ${err}` });
    }
}

// Patch
router.patch('/:id',(req,res,next) => {
    let id = req.params.id
    knex('users')
    .where('id',id)
    .update({
        id:req.body.id,
        name:req.body.name,
        message:req.body.message
    })
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

//Delete
router.delete('/:id',(req,res,next) => {
    let id = req.params.id;
    let body = req.body;
    knex('users')
    .where('id',id)
    .returning(['id','name','message'])
    .del()
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

//error
router.use((err, req, res, next) => {
    const status = err.status || 404
    res.status(status).json({ error: err })
})
  
router.use((req, res, next) => {
    res.status(404).json({ error: { status: 404, message: 'Not found' }})
})


module.exports = {
    getAllUsers,
    getOneUser
  }