'use strict';
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const { signUp } = require('../dao/signup');

// Post signup Route
const signUpUser = async (req, res, next) => {
  try {
    const data = await signUp(req);
    if (!_.isEmpty(data)) {
      const token = jwt.sign(
        {
          email: data[0].email,
        },
        process.env.TOKEN_SECRET,
        { expiresIn: '14d' }
      );
      res.status(200).send({
        token: token,
        id: data[0].id,
        email: data[0].email,
      });
    } else {
      console.log('Sign Up Error');
      res.status(404).send({ message: `Sign up error` });
    }
  } catch (err) {
    console.error('err', err);
    res.status(500).send({ message: `Internal Server ${err}` });
  }
};

module.exports = {
  signUpUser,
};
