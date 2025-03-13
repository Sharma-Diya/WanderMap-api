/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('attractions', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('description');
      table.string('address');
      table.float('latitude');
      table.float('longitude');
      table.string('category').notNullable(); 
      table.boolean('is_featured').defaultTo(false);
  
      table.integer('city_id').unsigned()
      .references('id').inTable('cities')  // references the 'id' column in 'cities'
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable();
    
  
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('attractions');
  };
  