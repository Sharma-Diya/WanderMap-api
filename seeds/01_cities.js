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
      description: 'Toronto is the capital city of the Canadian province of Ontario. It is the most populous city in Canada and the fourth most populous city in North America.',
      latitude: 43.6532,
      longitude: -79.3832,
      // image_url: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9yb250b3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 2,
      name: 'Vancouver',
      province: 'British Columbia',
      description: 'Vancouver is a major city in western Canada, located in the Lower Mainland region of British Columbia. It is one of the most ethnically and linguistically diverse cities in Canada.',
      latitude: 49.2827,
      longitude: -123.1207,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 3,
      name: 'Montreal',
      province: 'Quebec',
      description: 'Montreal is the second-most populous city in Canada and the most populous city in the Canadian province of Quebec. Founded in 1642, it is named after Mount Royal, the triple-peaked hill in the heart of the city.',
      latitude: 45.5017,
      longitude: -73.5673,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 4,
      name: 'Calgary',
      province: 'Alberta',
      description: 'Calgary is the largest city in the western Canadian province of Alberta and the largest municipality in western Canada. It is situated at the confluence of the Bow River and the Elbow River in the south of the province, in an area of foothills and prairie.',
      latitude: 51.0447,
      longitude: -114.0719,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 5,
      name: 'Ottawa',
      province: 'Ontario',
      description: 'Ottawa is the capital city of Canada. It is located at the confluence of the Ottawa River and the Rideau River in the southern portion of the province of Ontario.',
      latitude: 45.4215,
      longitude: -75.6972,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
    {
      id: 6,
      name: 'Edmonton',
      province: 'Alberta',
      description: 'Edmonton is the vibrant capital city of Alberta, Canada, known for its rich history, cultural diversity, and beautiful landscapes. Located in the heart of the province, Edmonton serves as the economic, political, and cultural hub of the region. With its thriving arts scene, festivals, and outdoor activities, it offers a mix of urban amenities and natural beauty.',
      latitude: 45.4215,
      longitude: -75.6972,
      // image_url: 'https://t4.ftcdn.net/jpg/03/38/15/91/360_F_338159126_WEv4wuExKtcM41s3owygSsbOcETE3PNP.jpg'

    },
  ]);
};