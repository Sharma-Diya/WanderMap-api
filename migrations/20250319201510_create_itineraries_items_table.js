/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('itinerary_items', (table) => {
      table.increments('id').primary();
      table.integer('itinerary_id').unsigned().notNullable();
      table.foreign('itinerary_id').references('id').inTable('itineraries').onDelete('CASCADE');
      table.integer('attraction_id').unsigned().notNullable();
      table.foreign('attraction_id').references('id').inTable('attractions').onDelete('CASCADE');
      table.string('time').notNullable();
      table.text('description');
      table.integer('order').notNullable();
      table.timestamps(true, true);
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export async function down(knex) {
    return knex.schema.dropTable('itinerary_items');
  }