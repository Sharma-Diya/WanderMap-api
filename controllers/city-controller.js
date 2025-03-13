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

export{ getAllCities };