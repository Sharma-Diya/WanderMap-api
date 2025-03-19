import initKnex from "knex";
import configuration from "../knexfile.js";


const knex = initKnex(configuration);
// Get all attractions
const getAllAttractions = async (req, res) => {

    try{
        const data = await knex('attractions').select(
            "attractions.id",
            "attractions.name",
            "attractions.description",
            "attractions.address",
            "attractions.category",
            "cities.id as city_id",
            "cities.name as city_name"
        )
        .join("cities", "attractions.city_id","=","cities.id");
        res.json(data);

    }catch(err){
        console.error(err);
        res.status(400).json({ error: 'Server error' });
    }
};

// GET attractions for specific city
const getAttractionsById = async (req, res) => {
    try{

        const { id } = req.params;

        const data = await knex('attractions').select(
            "attractions.id",
            "attractions.name",
            "attractions.description",
            "attractions.address",
            "attractions.category",
            "cities.id as city_id",
            "cities.name as city_name"
        )
        .join("cities", "attractions.city_id", "=", "cities.id")
        .where("attractions.id", id)
        .first();

        if (!data) {
            return res.status(404).json({
                message: `Attraction with ID ${id} not found`,
            });
        }
       
         // Fetch attractions images
         const images = await knex("images")
         .select("id", "url", "alt_text", "is_featured", "display_order")
         .where({ imageable_type: "place", imageable_id: id })
         .orderBy("display_order");

        res.status(200).json ({...data, images});
    }catch(err){
        console.error(err);
        res.status(400).json({error: 'Server error'});
    }
}

export  {
    getAllAttractions,
    getAttractionsById
}