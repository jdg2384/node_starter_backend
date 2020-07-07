
exports.up = function(knex, Promise) {
    return knex.schema.createTable('consumed_foods', table => {
        table.increments('id');
        table.string('food_name');
        table.string('glucose_level');
    })
};
      
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('consumed_foods')
};