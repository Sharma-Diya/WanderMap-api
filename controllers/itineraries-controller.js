import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

// Get all itineraries
const getAllItineraries = async (_req, res) => {

    try{
        const itineraries = await knex('itineraries');
        res.status(200).json(itineraries);
    }catch(error){
        console.error(error);
        res.status(400).json({ error: 'Server error' });
    }
}

// Get itinerary by id
const getItineraryById = async (req, res) => {
    try {
      const { id } = req.params; // Extract the 'id' from the request parameters
  
      // Validate the ID (optional, but recommended)
      if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'Invalid itinerary ID' });
      }
  
      const itinerary = await knex('itineraries')
        .where({ id: id }) // Use the 'id' to find the specific itinerary
        .first(); // Use 'first()' to get a single result, or null if not found
  
      if (!itinerary) {
        return res.status(404).json({ error: 'Itinerary not found' });
      }
  
      res.status(200).json(itinerary); // Return the found itinerary
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' }); // Use 500 for server errors
    }
  };

// GET Itineraries By City Id
const getItinerariesByCityId= async (req, res) => {
    const { cityId } = req.params;

    try {
      // 1. Validate input
      if (!cityId) {
        return res.status(400).json({ error: 'City ID is required' });
      }

      // 2. Find itineraries for the given city ID
      const itineraries = await knex('itineraries')
        .where({ city_id: cityId })
        .select('id', 'name', 'season'); // Select only the columns you need

      if (!itineraries || itineraries.length === 0) {
        return res.status(404).json({ error: 'No itineraries found for the specified city ID' });
      }

      // 3. Return the itineraries
      res.json(itineraries);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

    // get itinerary by city and season
    const getItineraryByCityAndSeason = async (req, res) => {
        const { cityId, season } = req.params;
    
        try {
          // 1. Validate input (important for security)
          if (!cityId || !season) {
            return res.status(400).json({ error: 'City ID and Season are required' });
          }
    
          // 2. Find the itinerary ID
          const itinerary = await knex('itineraries')
            .where({ city_id: cityId, season: season })
            .first();
    
          if (!itinerary) {
            return res.status(404).json({ error: 'Itinerary not found for the specified city and season' });
          }
    
          // 3. Get itinerary items, ordered by 'order'
          const itineraryItems = await knex('itinerary_items')
            .where({ itinerary_id: itinerary.id })
            .orderBy('order', 'asc');
    
          // 4. Return the data
          res.json(itineraryItems);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
      }
  
export { getAllItineraries, getItineraryById, getItinerariesByCityId, getItineraryByCityAndSeason};