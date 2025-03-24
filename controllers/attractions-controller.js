import initKnex from "knex";
import configuration from "../knexfile.js";


const knex = initKnex(configuration);
const getAllAttractions = async (req, res) => {
    try{
        const data = await knex('attractions').select(
            "attractions.id",
            "attractions.name",
            "attractions.description",
            "attractions.address",
            "attractions.category",
            "cities.id as city_id",
            "cities.name as city_name",
            knex.raw('JSON_ARRAYAGG(JSON_OBJECT(\'url\', images.url, \'alt_text\', images.alt_text)) as images')
        )
        .join("cities", "attractions.city_id","=","cities.id")
        .leftJoin("images", function() {
            this.on('images.imageable_id', '=', 'attractions.id')
                .on('images.imageable_type', '=', knex.raw('?', ['attraction']));
        })
        .groupBy("attractions.id", "cities.id");
        res.json(data);

    }catch(err){
        console.error(err);
        res.status(400).json({ error: 'Server error' });
    }
};

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