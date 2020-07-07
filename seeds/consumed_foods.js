
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('consumed_foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('consumed_foods').insert([
        {
          id: 1, 
          food_name: 'Blueberries',
          glucose_level: '120'
        },
      ]);
    });
};
