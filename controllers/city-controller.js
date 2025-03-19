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



// // get images by city
// const getImagesByCity = async (req, res) => {

//     try {
//         const { id } = req.params;
//         const data = await knex('images')
//             .select("id", "url", "alt_text", "is_featured", "display_order")
//             .where({ imageable_type: "city", imageable_id: id })
//             .orderBy("display_order");

//         res.status(200).json({
//             city_id: id,
//             data: data.map(img => ({
//                 id: img.id,
//                 url: img.url,
//                 alt_text: img.alt_text,
//                 is_featured: img.is_featured === 1, // Convert 1 to true
//                 display_order: img.display_order
//             }))
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({ error: 'Server error' });
//     }
// }

const getCityDetails = async (req, res) => {
    try {
        const { id } = req.params;

        // Fetch city details
        const city = await knex("cities").where("id", id).first();

        if (!city){
            return res.status(404).json({ error: "City not found" });
        }
        // Fetch attractions for the city
        const attractions = await knex("attractions")
            .select(
                "attractions.id",
                "attractions.name",
                "attractions.description",
                "attractions.address",
                "attractions.category"
            )
            .where("attractions.city_id", id);

        // Fetch city images
        const images = await knex("images")
            .select("id", "url", "alt_text", "is_featured", "display_order")
            .where({ imageable_type: "city", imageable_id: id })
            .orderBy("display_order");

        // Combine data into a structured response
        res.status(200).json({
            ...city,
            attractions,
            images
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

export { getAllCities, getCityById, 
    // getAllAttractionsByCities, getImagesByCity, 
    getCityDetails }; 