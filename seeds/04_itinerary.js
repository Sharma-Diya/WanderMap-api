export async function seed(knex) {
    await knex('itineraries').del();  
  
    const cities = await knex('cities').select('id', 'name');
    const cityMap = Object.fromEntries(cities.map(({ id, name }) => [name, id]));
  
    const seasons = ["Summer", "Winter"];
    const cityNames = [
      { city: "Toronto", province: "Ontario" },
      { city: "Vancouver", province: "British Columbia" },
      { city: "Montreal", province: "Quebec" },
      { city: "Quebec City", province: "Quebec" },
      { city: "Banff", province: "Alberta" },
      { city: "Victoria", province: "British Columbia" },
      { city: "Calgary", province: "Alberta" },
      { city: "Ottawa", province: "Ontario" },
      { city: "Halifax", province: "Nova Scotia" },
      { city: "St. John's", province: "Newfoundland and Labrador" }
    ];
  
    const itineraries = cityNames.flatMap(({ city, province }) => {
      const cityKey = city;  
      if (!cityMap[cityKey]) {
        throw new Error(`City not found: ${cityKey}`);
      }
  
      return seasons.map(season => ({
        city_id: cityMap[cityKey],
        season,
        name: `${cityKey} ${season} Itinerary`
      }));
    });
  
    await knex('itineraries').insert(itineraries);
  
    console.log(`Inserted ${itineraries.length} itineraries.`);
  }
  