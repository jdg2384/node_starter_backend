const knex = require('../../knex');
const bcrypt = require('bcrypt');

const signUp = async (req) => {
  var salt = bcrypt.genSaltSync(4);
  var hash = bcrypt.hashSync(req.body.password, salt);
  await knex('users')
    .insert(
      {
        email: req.body.email,
        password: hash,
        salt: salt,
      },
      '*'
    )
    .then((data) => data[0]);
};

module.exports = {
  signUp,
};
