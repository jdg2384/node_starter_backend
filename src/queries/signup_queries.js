'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../../knex');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Post signup Route
const signUpUser = (req,res,next) => {
    // var decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    var salt = bcrypt.genSaltSync(4)
    var hash = bcrypt.hashSync(req.body.password, salt);
    const token = jwt.sign({
        email: 'gmail@gmail.com',
    }, process.env.TOKEN_SECRET, { expiresIn: 20 });
    try {
        console.log("decoded", decoded)
      } catch(err) {
        res.send([err.name])
      }
    // var salt = bcrypt.genSaltSync(4)
    // var hash = bcrypt.hashSync(req.body.password, salt);
    // knex('users').insert({
    //     email:req.body.email,
    //     password:hash,
    //     salt:salt
    // },'*') 
    // .then(user=>{
    //     const token = jwt.sign({
    //         id: user[0].id,
    //         email: user[0].email,
    //     },'shhhhh');
    //     res.status(200).send({
    //         token:token
    //     })
    // })
}

// Error
router.use((err, req, res, next) => {
    const status = err.status || 404
    res.status(status).json({ error: err })
})
  
router.use((req, res, next) => {
    res.status(404).json({ error: { status: 404, message: 'Not found' }})
})

module.exports = {
    signUpUser,
}