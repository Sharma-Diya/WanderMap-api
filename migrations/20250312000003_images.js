// db/migrations/20250312000003_create_images.js
export function up(knex) {
    return knex.schema.createTable('images', (table) => {
      table.increments('id').primary(); // Primary key
      table.string('url').notNullable();
      table.string('alt_text');
      table.string('imageable_type').notNullable(); // 'city' or 'place' 
      table.integer('imageable_id').unsigned().notNullable();
      table.boolean('is_featured').defaultTo(false);
      table.integer('display_order').defaultTo(0);
      table.timestamps(true, true);
      
      // This allows polymorphic relationships (images can belong to either cities or places)
      table.index(['imageable_type', 'imageable_id']);
    });
  };
  
  export function down(knex) {
    return knex.schema.dropTable('images');
  };