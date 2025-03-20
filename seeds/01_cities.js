// db/seeds/01_cities.js
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cities').del();

  // Inserts seed entries
  await knex('cities').insert([
    {
      id: 1,
      name: 'Toronto',
      province: 'Ontario',
      description: 'Canada\'s largest city, known for its diverse culture, iconic CN Tower, and vibrant arts scene.',
      latitude: 43.6532,
      longitude: -79.3832,
      // image_url: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9yb250b3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 2,
      name: 'Vancouver',
      province: 'British Columbia',
      description: 'A stunning coastal city surrounded by mountains, offering outdoor activities and a thriving food scene.',
      latitude: 49.2827,
      longitude: -123.1207,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 3,
      name: 'Montreal',
      province: 'Quebec',
      description: 'A historic city with European charm, famous for its cobblestone streets, festivals, and French-Canadian culture.',
      latitude: 45.5017,
      longitude: -73.5673,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 4,
      name: 'Calgary',
      province: 'Alberta',
      description: 'A modern city known for the Calgary Stampede, a famous rodeo and festival, and its proximity to the Rockies.',
      latitude: 51.0447,
      longitude: -114.0719,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 5,
      name: 'Ottawa',
      province: 'Ontario',
      description: 'Canada\'s capital city, home to Parliament Hill, museums, and historical landmarks.',
      latitude: 45.4215,
      longitude: -75.6972,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 6,
      name: 'Quebec City',
      province: 'Quebec',
      description: "A UNESCO World Heritage site, known for its historic architecture, including the Château Frontenac.",
      latitude: 46.8139,
      longitude: -71.2080,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 7,
      name: 'Banff',
      province: 'Alberta',
      description: "Located in the Canadian Rockies, offering breathtaking mountain scenery, hiking, and skiing.",
      latitude: 51.1784,
      longitude: -115.5728,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 8,
      name: 'Victoria',
      province: 'British Columbia',
      description: "Known as the 'Garden City,' offering beautiful gardens, whale watching, and a relaxed atmosphere.",
      latitude: 48.4284,
      longitude: -123.3656,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 9,
      name: 'Halifax',
      province: 'Nova Scotia',
      description: "A historic port city with a rich maritime heritage, friendly locals, and delicious seafood.",
      latitude: 44.6488,
      longitude: -63.5752,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 10,
      name: "St. John's",
      province: "Newfoundland and Labrador",
      description: "The oldest city in North America, known for its colorful houses, lively music scene, and stunning coastal scenery.",
      latitude: 47.5615,
      longitude: -52.7126,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'
    },
  ]);
};