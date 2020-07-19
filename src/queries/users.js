const _ = require('lodash');
const { getUsers, getUser, updateUser, deleteUser } = require('../dao/users');

// Get All
const getAllUsers = async (req, res, next) => {
  try {
    const data = await getUsers();
    if (!_.isEmpty(data)) {
      res.send(data);
    } else {
      res.status(404).send({ message: 'No data to return' });
    }
  } catch (err) {
    console.error('err', err);
    res.status(500).send({ message: `Internal Server ${err}` });
  }
};

// Get One User
const getOneUser = async (req, res, next) => {
  try {
    const data = await getUser(req.params.id);
    if (!_.isEmpty(data)) {
      res.send(data);
    } else {
      res.status(404).send({ message: 'No data to return' });
    }
  } catch (err) {
    console.error('err', err);
    res.status(500).send({ message: `Internal Server ${err}` });
  }
};

// Patch
const patchUser = async (req, res, next) => {
  try {
    const data = await updateUser(req);
    if (!_.isEmpty(data)) {
      res.send(data);
    } else {
      res.status(404).send({ message: 'No data to return' });
    }
  } catch (err) {
    console.error('err', err);
    res.status(500).send({ message: `Internal Server ${err}` });
  }
};

//Delete
const deleteUserFunc = async (req, res, next) => {
  try {
    const data = await deleteUser(req.params.id);
    if (!_.isEmpty(data)) {
      res.send(data);
    } else {
      res.status(404).send({ message: 'No data to return' });
    }
  } catch (err) {
    console.error('err', err);
    res.status(500).send({ message: `Internal Server ${err}` });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  patchUser,
  deleteUserFunc,
};
