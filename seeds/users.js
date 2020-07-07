
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          email: 'primemtn1@gmail',
          password: '$2a$04$viNV9cjyWyAyVmWIQiLmDOxX.SPxBHfpvnqt316p0gWi5f06C6Fte',
          salt: '$2a$04$viNV9cjyWyAyVmWIQiLmDO'
        },
        {
          id: 2, 
          email: 'gmail@gmail',
          password: '$3a$04$viNV9cjyWyAyVmWIQiLmDOxX.SPxBHfpvnqt316p0gWi5f06C6Fte',
          salt: '$3a$04$viNV9cjyWyAyVmWIQiLmDO'
        }
      ]);
    });
};
