/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('itineraries', (table) => {
    table.increments('id').primary(); // Auto-incremented primary key
    table.integer('city_id').unsigned().notNullable(); // Foreign key for the city
    table.foreign('city_id').references('id').inTable('cities').onDelete('CASCADE'); // Relationship to cities table
    table.date('date').notNullable(); // Date of the itinerary
    table.string('name', 255); // Name of the itinerary
    table.integer('user_id').unsigned().nullable(); // Optional user association (no foreign key reference to 'users' table)
    table.string('season', 255).nullable().defaultTo('summer'); // Season column with default value
    table.timestamps(true, true); // Automatically add created_at and updated_at
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTableIfExists('itineraries');
}
