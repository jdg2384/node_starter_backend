const knex = require('../knex');

const seed_users = async () => {
  await knex('users')
    .insert(
      {
        email: 'email@gmail',
        password:
          '$2a$04$viNV9cjyWyAyVmWIQiLmDOxX.SPxBHfpvnqt316p0gWi5f06C6Fte',
        salt: '$2a$04$viNV9cjyWyAyVmWIQiLmDO',
      },
      '*'
    )
    .then((users) => users);
};

module.exports = {
  seed_users,
};
