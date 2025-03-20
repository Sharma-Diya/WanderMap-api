/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    // Add latitude and longitude columns to itinerary_items table
    await knex.schema.table('itinerary_items', (table) => {
      table.float('latitude', 10, 6);  // 10 digits, 6 decimal places
      table.float('longitude', 10, 6); // 10 digits, 6 decimal places
    });
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    // Remove latitude and longitude columns from itinerary_items table
    await knex.schema.table('itinerary_items', (table) => {
      table.dropColumn('latitude');
      table.dropColumn('longitude');
    });
}
