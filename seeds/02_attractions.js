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
  const quebecCity = await knex('cities').where('name', 'Quebec City').first();
  const banff = await knex('cities').where('name', 'Banff').first();
  const victoria = await knex('cities').where('name', 'Victoria').first();
  const halifax = await knex('cities').where('name', 'Halifax').first();
  const stJohns = await knex('cities').where('name', "St. John's").first();

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
    {
      name: 'Distillery District',
      description: 'A historic and pedestrian-only village filled with Victorian-era industrial architecture, art galleries, boutiques, and restaurants.',
      address: '55 Mill St, Toronto, ON M5A 3C4',
      latitude: 43.6503,
      longitude: -79.3598,
      category: 'Historic Site',
      is_featured: false,
      city_id: toronto.id,
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
    {
      name: 'Capilano Suspension Bridge',
      description: 'A simple suspension bridge crossing the Capilano River in the District of North Vancouver, British Columbia, Canada.',
      address: '3735 Capilano Rd, North Vancouver, BC V7R 4J1',
      latitude: 49.3421,
      longitude: -123.0980,
      category: 'Outdoor',
      is_featured: false,
      city_id: vancouver.id,
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
    {
      name: 'Old Montreal',
      description: 'Historic area with cobblestone streets, French architecture, and a lively atmosphere.',
      address: 'Old Montreal, Montreal, QC',
      latitude: 45.5031,
      longitude: -73.5539,
      category: 'Historic Site',
      is_featured: false,
      city_id: montreal.id,
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
    {
      name: 'Heritage Park Historical Village',
      description: 'Living history museum with exhibits and activities depicting life in Western Canada from the 1860s to 1950s.',
      address: '1900 Heritage Dr SW, Calgary, AB T2V 2X3',
      latitude: 50.9926,
      longitude: -114.0883,
      category: 'Museum',
      is_featured: false,
      city_id: calgary.id,
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
      name: 'Canadian War Museum',
      description: 'National museum showcasing Canada\'s military history with artifacts and exhibits.',
      address: '1 Vimy Pl, Ottawa, ON K1A 0M8',
      latitude: 45.4194,
      longitude: -75.7144,
      category: 'Museum',
      is_featured: true,
      city_id: ottawa.id,
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
    },
    // Quebec City Attractions
    {
      name: 'Château Frontenac',
      description: 'Iconic hotel overlooking the St. Lawrence River, known for its historic architecture.',
      address: '1 Rue des Carrières, Québec, QC G1R 4P5',
      latitude: 46.8120,
      longitude: -71.2045,
      category: 'Landmark',
      is_featured: true,
      city_id: quebecCity.id,
    },
    {
      name: 'Old Quebec (Vieux-Québec)',
      description: 'UNESCO World Heritage site with cobblestone streets and historic buildings.',
      address: 'Vieux-Québec, Québec, QC',
      latitude: 46.8123,
      longitude: -71.2028,
      category: 'Historic Site',
      is_featured: true,
      city_id: quebecCity.id,
    },
    {
      name: 'Plains of Abraham',
      description: 'Historic battlefield and urban park offering scenic views of the city.',
      address: 'Québec, QC G1R 5H3',
      latitude: 46.8048,
      longitude: -71.2163,
      category: 'Park',
      is_featured: false,
      city_id: quebecCity.id,
    },



    // Banff Attractions
    {
      name: 'Lake Louise',
      description: 'Stunning glacial lake known for its turquoise waters and mountain backdrop.',
      address: 'Lake Louise, AB T0L 1E0',
      latitude: 51.4161,
      longitude: -116.2169,
      category: 'Nature',
      is_featured: true,
      city_id: banff.id,
    },
    {
      name: 'Banff National Park',
      description: 'Canada\'s oldest national park, offering hiking, skiing, and wildlife viewing.',
      address: 'Banff, AB T1L 1K2',
      latitude: 51.4968,
      longitude: -115.9281,
      category: 'Park',
      is_featured: true,
      city_id: banff.id,
    },
    {
      name: 'Moraine Lake',
      description: 'Another beautiful glacial lake with vibrant blue waters and mountain views.',
      address: 'Moraine Lake Rd, Improvement District No. 9, AB T0L 1E0',
      latitude: 51.3323,
      longitude: -116.1843,
      category: 'Nature',
      is_featured: false,
      city_id: banff.id,
    },

    //Victoria Attractions
    {
      name: 'Butchart Gardens',
      description: 'World-renowned display gardens with diverse floral displays and themed areas.',
      address: '800 Benvenuto Ave, Brentwood Bay, BC V8M 1J8',
      latitude: 48.5684,
      longitude: -123.4633,
      category: 'Garden',
      is_featured: true,
      city_id: victoria.id,
    },
    {
      name: 'British Columbia Parliament Buildings',
      description: 'Grand buildings housing the Legislative Assembly of British Columbia, offering tours and scenic views.',
      address: '501 Belleville St, Victoria, BC V8V 2L8',
      latitude: 48.4219,
      longitude: -123.3656,
      category: 'Government',
      is_featured: true,
      city_id: victoria.id,
    },
    {
      name: 'Royal BC Museum',
      description: 'Museum showcasing the natural and human history of British Columbia with interactive exhibits.',
      address: '675 Belleville St, Victoria, BC V8W 9W2',
      latitude: 48.4206,
      longitude: -123.3683,
      category: 'Museum',
      is_featured: false,
      city_id: victoria.id,
    },

    // Halifax Attractions
    {
      name: 'Halifax Citadel National Historic Site',
      description: 'Star-shaped fortress offering panoramic views of Halifax and a glimpse into its military past.',
      address: '5425 Sackville St, Halifax, NS B3J 3Y3',
      latitude: 44.6483,
      longitude: -63.5786,
      category: 'Historic Site',
      is_featured: true,
      city_id: halifax.id,
    },
    {
      name: 'Peggy\'s Cove',
      description: 'Picturesque fishing village with a historic lighthouse and rugged coastline.',
      address: 'Peggy\'s Cove, NS B3Z 3S3',
      latitude: 44.4983,
      longitude: -63.9142,
      category: 'Nature',
      is_featured: true,
      city_id: halifax.id,
    },
    {
      name: 'Waterfront Boardwalk',
      description: 'Lively waterfront area with shops, restaurants, and attractions along the harbor.',
      address: 'Halifax Waterfront, Halifax, NS',
      latitude: 44.6457,
      longitude: -63.5724,
      category: 'Urban Area',
      is_featured: false,
      city_id: halifax.id,
    },
    // St. John's Attractions
    {
      name: 'Signal Hill',
      description: 'Historic site with panoramic views of St. John\'s and the Atlantic Ocean, known for its role in communications history.',
      address: 'Signal Hill Rd, St. John\'s, NL A1A 1B3',
      latitude: 47.5701,
      longitude: -52.6800,
      category: 'Historic Site',
      is_featured: true,
      city_id: stJohns.id,
    },
    {
      name: 'Jellybean Row',
      description: 'Colorful row houses in downtown St. John\'s, known for their vibrant facades.',
      address: 'St. John\'s, NL',
      latitude: 47.5647,
      longitude: -52.7079,
      category: 'Urban Area',
      is_featured: true,
      city_id: stJohns.id,
    }, {
      name: 'Cape Spear',
      description: 'Easternmost point in North America with a historic lighthouse and stunning coastal scenery.',
      address: 'Cape Spear Lighthouse National Historic Site, St. John\'s, NL A1C 5H2',
      latitude: 47.5244,
      longitude: -52.6200,
      category: 'Historic Site',
      is_featured: false,
      city_id: stJohns.id,
    },
  ]);
};