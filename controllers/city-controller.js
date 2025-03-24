import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getAllCities = async (_req, res) => {
    try {
        const cities = await knex('cities').select(
            "cities.id", 
            "cities.name",
            "cities.province",
            "cities.description",
            knex.raw('JSON_ARRAYAGG(JSON_OBJECT(\'url\', images.url, \'alt_text\', images.alt_text)) as images')
        )
        .leftJoin("images", function() {
            this.on('images.imageable_id', '=', 'cities.id')
                .on('images.imageable_type', '=', knex.raw('?', ['city']));
        })
        .groupBy("cities.id");
        res.status(200).json(cities);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Server error' });
    }
};

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

const getCityDetails = async (req, res) => {
    try {
        const { id } = req.params;

        const city = await knex("cities").where("id", id).first();

        if (!city){
            return res.status(404).json({ error: "City not found" });
        }

        const cityImages = await knex("images")
            .select("id", "url", "alt_text", "is_featured", "display_order")
            .where({ imageable_type: "city", imageable_id: id })
            .orderBy("display_order");

        const attractions = await knex("attractions")
            .select(
                "attractions.id",
                "attractions.name",
                "attractions.description",
                "attractions.address",
                "attractions.category",
            )
            .where("attractions.city_id", id);

        for (const attraction of attractions) {
            const attractionImages = await knex("images")
                .select("url", "alt_text")
                .where({ imageable_type: "attraction", imageable_id: attraction.id }) 
                .orderBy("display_order");
            attraction.images = attractionImages;
        }

        res.status(200).json({
            ...city,
            attractions,
            images: cityImages 
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

export { getAllCities, getCityById, 
    getCityDetails }; 