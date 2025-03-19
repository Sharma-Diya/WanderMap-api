import * as cityController from "../controllers/city-controller.js";

import express from "express";
// import { getImagesById } from "../controllers/images-controller.js";
const cityRouter = express.Router();


cityRouter
    .route("/")
    .get(cityController.getAllCities);

cityRouter
    .route("/:id")
    .get(cityController.getCityDetails);

// cityRouter
//     .route("/:id/attractions")
//     .get(cityController.getAllAttractionsByCities);

// cityRouter
//     .route("/:id/images")
//     .get(cityController.getImagesByCity);

export { cityRouter};    