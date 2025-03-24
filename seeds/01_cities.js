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
      description: 'Canada\'s largest city offers a dazzling array of experiences, from the soaring heights of the CN Tower to the diverse and vibrant neighborhoods. Immerse yourself in world-class entertainment, explore renowned museums, and savor a global culinary scene. Discover the energy of urban life alongside beautiful waterfront views on Lake Ontario. A truly multicultural metropolis awaits your exploration.',
      latitude: 43.6532,
      longitude: -79.3832,
      // image_url: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9yb250b3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 2,
      name: 'Vancouver',
      province: 'British Columbia',
      description: 'Nestled between majestic mountains and the sparkling Pacific Ocean, Vancouver is a haven for outdoor enthusiasts and food lovers. Explore lush rainforests, hike scenic trails with breathtaking vistas, and enjoy a thriving culinary scene that celebrates fresh, local ingredients. From Stanley Park\'s natural beauty to the vibrant streets of Gastown, adventure and discovery await in this stunning coastal gem, not far from Surrey.',
      latitude: 49.2827,
      longitude: -123.1207,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 3,
      name: 'Montreal',
      province: 'Quebec',
      description: 'Experience the unique charm of Montreal, a city brimming with European flair and a vibrant French-Canadian culture. Wander through cobblestone streets in Old Montreal, discover captivating street art, and immerse yourself in the lively atmosphere of its numerous festivals. Savor delicious poutine, explore historic landmarks, and enjoy a taste of Europe without leaving North America. A truly enchanting destination.',
      latitude: 45.5017,
      longitude: -73.5673,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 4,
      name: 'Calgary',
      province: 'Alberta',
      description: 'Known for its modern skyline and the world-famous Calgary Stampede, this energetic city offers a blend of urban excitement and easy access to the stunning Canadian Rockies. Discover a vibrant arts and culture scene, explore the city\'s western heritage, and prepare for incredible adventures in the nearby mountains. From thrilling rodeos to breathtaking hiking trails, Calgary provides a gateway to both city life and natural wonders.',
      latitude: 51.0447,
      longitude: -114.0719,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 5,
      name: 'Ottawa',
      province: 'Ontario',
      description: 'As Canada\'s capital, Ottawa is a city rich in history and culture, home to iconic landmarks like Parliament Hill and numerous national museums. Explore beautiful green spaces, stroll along the Rideau Canal, and delve into the country\'s heritage. Discover impressive architecture, engaging historical sites, and a welcoming atmosphere in the heart of Canada.',
      latitude: 45.4215,
      longitude: -75.6972,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 6,
      name: 'Quebec City',
      province: 'Quebec',
      description: "Step into a living history book in Quebec City, a UNESCO World Heritage site boasting stunning historic architecture, including the majestic Château Frontenac. Wander through its charming cobblestone streets, explore the Plains of Abraham, and soak in the romantic atmosphere of this unique destination. Experience the allure of Old Quebec, a truly enchanting place with a rich and captivating past.",
      latitude: 46.8139,
      longitude: -71.2080,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 7,
      name: 'Banff',
      province: 'Alberta',
      description: "Nestled in the heart of the Canadian Rockies, Banff offers unparalleled natural beauty and a gateway to incredible outdoor adventures. Surrounded by towering peaks, pristine lakes, and lush forests, it's a paradise for hiking, skiing, and wildlife viewing. Immerse yourself in breathtaking alpine scenery and create unforgettable memories in this iconic mountain town.",
      latitude: 51.1784,
      longitude: -115.5728,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 8,
      name: 'Victoria',
      province: 'British Columbia',
      description: "Known as the 'Garden City,' Victoria captivates visitors with its stunning floral displays, charming British colonial architecture, and relaxed coastal vibe. Explore the world-renowned Butchart Gardens, embark on a whale watching tour, and enjoy afternoon tea in a picturesque setting. Discover a blend of natural beauty and old-world charm in this delightful capital city, a pleasant ferry ride from Surrey.",
      latitude: 48.4284,
      longitude: -123.3656,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 9,
      name: 'Halifax',
      province: 'Nova Scotia',
      description: "A historic port city brimming with maritime heritage, Halifax welcomes visitors with its friendly locals, vibrant waterfront, and delicious seafood. Explore the iconic Citadel Hill, stroll along the boardwalk, and discover a rich tapestry of history and culture. Experience the charm of the East Coast and savor the fresh catches of the Atlantic Ocean in this welcoming city.",
      latitude: 44.6488,
      longitude: -63.5752,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 10,
      name: "St. John's",
      province: "Newfoundland and Labrador",
      description: "As the oldest city in North America, St. John's boasts a unique character with its colorful Jellybean Row houses, lively music scene, and dramatic coastal scenery. Explore rugged cliffs, discover charming pubs, and experience the warm hospitality of Newfoundland. Uncover the captivating history and vibrant culture of this resilient city on the edge of the Atlantic.",
      latitude: 47.5615,
      longitude: -52.7126,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'
    },
  ]);
};