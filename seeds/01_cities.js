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
         },
    {
      id: 2,
      name: 'Vancouver',
      province: 'British Columbia',
      description: 'Vancouver is a major city in western Canada, located in the Lower Mainland region of British Columbia. It is one of the most ethnically and linguistically diverse cities in Canada.',
      latitude: 49.2827,
      longitude: -123.1207,
        },
    {
      id: 3,
      name: 'Montreal', 
      province: 'Quebec',
      description: 'Montreal is the second-most populous city in Canada and the most populous city in the Canadian province of Quebec. Founded in 1642, it is named after Mount Royal, the triple-peaked hill in the heart of the city.',
      latitude: 45.5017,
      longitude: -73.5673,
    },
    {
      id: 4,
      name: 'Calgary',
      province: 'Alberta',
      description: 'Calgary is the largest city in the western Canadian province of Alberta and the largest municipality in western Canada. It is situated at the confluence of the Bow River and the Elbow River in the south of the province, in an area of foothills and prairie.',
      latitude: 51.0447,
      longitude: -114.0719,
    },
    {
      id: 5,
      name: 'Ottawa',
      province: 'Ontario',
      description: 'Ottawa is the capital city of Canada. It is located at the confluence of the Ottawa River and the Rideau River in the southern portion of the province of Ontario.',
      latitude: 45.4215,
      longitude: -75.6972,
        }
  ]);
};