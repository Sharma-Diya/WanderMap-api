export function up(knex) {
  return knex.schema.createTable('cities', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('province').notNullable();
    table.text('description');
    table.float('latitude');
    table.float('longitude');
    table.text('image_url'); 
    table.timestamps(true, true);
  });
};

export function down(knex) {
  return knex.schema.dropTable('cities');
};
