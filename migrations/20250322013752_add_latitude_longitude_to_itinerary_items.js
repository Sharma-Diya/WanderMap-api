/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.table('itinerary_items', (table) => {
      table.float('latitude',10,6).nullable();   // Add latitude column
      table.float('longitude',10,6).nullable();  // Add longitude column
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export async function down(knex) {
    return knex.schema.table('itinerary_items', (table) => {
      table.dropColumn('latitude');   // Remove latitude column
      table.dropColumn('longitude');  // Remove longitude column
    });
  }
  