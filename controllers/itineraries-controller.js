import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getAllItineraries = async (_req, res) => {

    try{
        const itineraries = await knex('itineraries');
        res.status(200).json(itineraries);
    }catch(error){
        console.error(error);
        res.status(400).json({ error: 'Server error' });
    }
}

const getItineraryById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id || isNaN(id)) {
        return res.status(400).json({ error: 'Invalid itinerary ID' });
      }
  
      const itinerary = await knex('itineraries')
        .where({ id: id })
        .first(); 
  
      if (!itinerary) {
        return res.status(404).json({ error: 'Itinerary not found' });
      }
  
      res.status(200).json(itinerary); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' }); 
    }
  };

const getItinerariesByCityId= async (req, res) => {
    const { cityId } = req.params;

    try {
      if (!cityId) {
        return res.status(400).json({ error: 'City ID is required' });
      }

      const itineraries = await knex('itineraries')
        .where({ city_id: cityId })
        .select('id', 'name', 'season'); 

      if (!itineraries || itineraries.length === 0) {
        return res.status(404).json({ error: 'No itineraries found for the specified city ID' });
      }

      res.json(itineraries);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
};

    const getItineraryByCityAndSeason = async (req, res) => {
        const { cityId, season } = req.params;
    
        try {
          if (!cityId || !season) {
            return res.status(400).json({ error: 'City ID and Season are required' });
          }
    
          const itinerary = await knex('itineraries')
            .where({ city_id: cityId, season: season })
            .first();
    
          if (!itinerary) {
            return res.status(404).json({ error: 'Itinerary not found for the specified city and season' });
          }
    
          const itineraryItems = await knex('itinerary_items')
            .where({ itinerary_id: itinerary.id })
            .orderBy('order', 'asc');
    
          res.json(itineraryItems);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
      }
  
export { getAllItineraries, getItineraryById, getItinerariesByCityId, getItineraryByCityAndSeason};