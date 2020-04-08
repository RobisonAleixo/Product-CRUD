
exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
    table.increments('id');
    table.string('product').notNullable();
    table.decimal('value').notNullable();
    table.string('description').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
