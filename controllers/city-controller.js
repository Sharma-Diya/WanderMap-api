import initKnex from "knex";
import configuration from "../knexfile.js";


const knex = initKnex(configuration);


// GET all cities
const getAllCities = async (_req, res) => {
    try {
        const cities = await knex('cities').select(
            "id",
            "name",
            "province",
            "description"
        );
        res.status(200).json(cities);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Server error' });
    }
};

// GET city by Id
const getCityById = async (req, res) => {

    try {
        const { id } = req.params;
        const data = await knex('cities').select(
            "id",
            "name",
            "province",
            "description"
        ).where({ id }).first();

        if (!data) {
            return res.status(404).json({
                message: `City with ID ${id} not found`,
            });
        }
        res.status(200).json(data);
    }
    catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Server error' });
    }
};

const getAllAttractionsByCities = async (req, res) => {

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
        .join("cities", "attractions.city_id","=","cities.id")
        .where("cities.id",id);
        res.json(data);

    }catch(err){
        console.error(err);
        res.status(400).json({ error: 'Server error' });
    }
};

export { getAllCities, getCityById, getAllAttractionsByCities };