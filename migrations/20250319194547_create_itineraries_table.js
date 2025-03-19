/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('itineraries', (table) => {
      table.increments('id').primary();
      table.integer('city_id').unsigned().notNullable();
      table.foreign('city_id').references('id').inTable('cities').onDelete('CASCADE'); // Ensures cascading delete
      table.date('date').notNullable();
      table.string('name');
      table.integer('user_id').unsigned().nullable(); // Optional user association
      // table.foreign('user_id').references('id').inTable('users').onDelete('SET NULL'); // Uncomment if you want foreign key constraint for users
      table.timestamps(true, true); // Automatically creates created_at and updated_at
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export async function down(knex) {
    return knex.schema.dropTableIfExists('itineraries');
  }
  