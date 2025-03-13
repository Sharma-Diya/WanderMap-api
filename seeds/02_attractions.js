// db/seeds/02_attractions.js
export async function seed(knex) {
    // Deletes ALL existing entries
    await knex('attractions').del();
    
    // Get the city IDs
    const toronto = await knex('cities').where('name', 'Toronto').first();
    const vancouver = await knex('cities').where('name', 'Vancouver').first();
    const montreal = await knex('cities').where('name', 'Montreal').first();
    const calgary = await knex('cities').where('name', 'Calgary').first();
    const ottawa = await knex('cities').where('name', 'Ottawa').first();
    
    // Inserts seed entries
    await knex('attractions').insert([
      // Toronto attractions
      {
        name: 'CN Tower',
        description: 'A 553.3 m-high concrete communications and observation tower in downtown Toronto, Ontario, Canada.',
        address: '290 Bremner Blvd, Toronto, ON M5V 3L9',
        latitude: 43.6426,
        longitude: -79.3871,
        category: 'Landmark',
        is_featured: true,
        city_id: toronto.id
      },
      {
        name: 'Royal Ontario Museum',
        description: 'Museum of art, world culture and natural history in Toronto, Ontario, Canada.',
        address: '100 Queens Park, Toronto, ON M5S 2C6',
        latitude: 43.6677,
        longitude: -79.3948,
        category: 'Museum',
        is_featured: true,
        city_id: toronto.id
      },
      
      // Vancouver attractions
      {
        name: 'Stanley Park',
        description: 'Stanley Park is a 405-hectare public park that borders the downtown of Vancouver in British Columbia, Canada.',
        address: 'Vancouver, BC V6G 1Z4',
        latitude: 49.3017,
        longitude: -123.1417,
        category: 'Park',
        is_featured: true,
        city_id: vancouver.id
      },
      {
        name: 'Granville Island',
        description: 'Granville Island is a peninsula and shopping district in Vancouver, British Columbia, Canada.',
        address: 'Granville Island, Vancouver, BC',
        latitude: 49.2711,
        longitude: -123.1351,
        category: 'Shopping',
        is_featured: true,
        city_id: vancouver.id
      },
      
      // Montreal attractions
      {
        name: 'Notre-Dame Basilica',
        description: 'A basilica in the historic district of Old Montreal, in Montreal, Quebec, Canada.',
        address: '110 Notre-Dame St W, Montreal, Quebec H2Y 1T2',
        latitude: 45.5046,
        longitude: -73.5566,
        category: 'Religious Site',
        is_featured: true,
        city_id: montreal.id
      },
      {
        name: 'Mount Royal Park',
        description: 'A large volcanic-related hill or small mountain in the city of Montreal, Quebec, Canada.',
        address: 'Mount Royal, Montreal, Quebec',
        latitude: 45.5074,
        longitude: -73.5873,
        category: 'Park',
        is_featured: true,
        city_id: montreal.id
      },
      
      // Calgary attractions
      {
        name: 'Calgary Tower',
        description: 'A 191-metre observation tower in downtown Calgary, Alberta, Canada.',
        address: '101 9 Ave SW, Calgary, AB T2P 1J9',
        latitude: 51.0445,
        longitude: -114.0631,
        category: 'Landmark',
        is_featured: true,
        city_id: calgary.id
      },
      {
        name: 'Calgary Zoo',
        description: 'The Calgary Zoo is located in Bridgeland, Calgary, Alberta, Canada, just east of the city\'s downtown.',
        address: '210 St. George\'s Drive NE, Calgary, AB T2E 7V6',
        latitude: 51.0453,
        longitude: -114.0348,
        category: 'Zoo',
        is_featured: true,
        city_id: calgary.id
      },
      
      // Ottawa attractions
      {
        name: 'Parliament Hill',
        description: 'Parliament Hill is an area of Crown land on the southern banks of the Ottawa River in downtown Ottawa, Ontario, Canada.',
        address: 'Wellington St, Ottawa, ON K1A 0A9',
        latitude: 45.4235,
        longitude: -75.7009,
        category: 'Government',
        is_featured: true,
        city_id: ottawa.id
      },
      {
        name: 'National Gallery of Canada',
        description: 'The National Gallery of Canada, located in Ottawa, Ontario, is one of Canada\'s premier art galleries.',
        address: '380 Sussex Dr, Ottawa, ON K1N 9N4',
        latitude: 45.4295,
        longitude: -75.6989,
        category: 'Museum',
        is_featured: true,
        city_id: ottawa.id
      }
    ]);
  };