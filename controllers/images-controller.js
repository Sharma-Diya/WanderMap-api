import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getAllImages = async (req, res) => {

    try {
        const data = await knex('images').select("*")
        res.status(200).json(data);

    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Server error' });
    }
}

const getImagesById = async (req, res) => {

    try {
        const { type, id } = req.params;

        if (!type) {
            return res.status(400).json({ error: "Invalid type" });
        }
        const data = await knex('images')
            .where({ imageable_type: type, imageable_id: id })
            .orderBy("display_order");

        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Server error' });
    }
}


export { getAllImages, getImagesById,  }