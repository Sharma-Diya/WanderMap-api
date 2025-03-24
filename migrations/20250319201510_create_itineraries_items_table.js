/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('itinerary_items', (table) => {
    table.increments('id').primary();
    table.integer('itinerary_id').unsigned().notNullable();
    table.foreign('itinerary_id').references('id').inTable('itineraries').onDelete('CASCADE');
    table.string('time', 255).notNullable(); // Changed to VARCHAR
    table.string('activity', 255); // Changed to VARCHAR
    table.text('description'); // Added description TEXT
    table.integer('order').notNullable();
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTableIfExists('itinerary_items');
}
