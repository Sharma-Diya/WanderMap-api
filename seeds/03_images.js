// db/seeds/03_images.js
export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('images').del();
    
    // Inserts seed entries with direct references using IDs
    await knex('images').insert([
      // City images
      {
        id: 1,
        url: 'https://example.com/images/toronto_skyline.jpg',
        alt_text: 'Toronto skyline with CN Tower',
        imageable_type: 'city',
        imageable_id: 1, // Toronto
        is_featured: true,
        display_order: 1
      },
      {
        id: 2,
        url: 'https://example.com/images/vancouver_skyline.jpg',
        alt_text: 'Vancouver skyline with mountains in background',
        imageable_type: 'city',
        imageable_id: 2, // Vancouver
        is_featured: true,
        display_order: 1
      },
      
      // Place images
      {
        id: 3,
        url: 'https://example.com/images/cn_tower.jpg',
        alt_text: 'CN Tower at sunset',
        imageable_type: 'place',
        imageable_id: 1, // CN Tower
        is_featured: true,
        display_order: 1
      },
      {
        id: 4,
        url: 'https://example.com/images/rom.jpg',
        alt_text: 'Royal Ontario Museum building',
        imageable_type: 'place',
        imageable_id: 2, // Royal Ontario Museum
        is_featured: true,
        display_order: 1
      },
      {
        id: 5,
        url: 'https://example.com/images/stanley_park.jpg',
        alt_text: 'Stanley Park seawall',
        imageable_type: 'place',
        imageable_id: 3, // Stanley Park
        is_featured: true,
        display_order: 1
      }
    ]);
  };