
exports.up = function(knex) {
  return knex.schema.createTable('cars', function (table) {
      table.increments();
      table.string('vin', 64).notNullable();
      table.string('make', 64).notNullable();
      table.string('model', 64).notNullable();
      table.integer('mileage').notNullable();
      table.string('transmission', 64);
      table.string('titleStatus', 255);
      table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
