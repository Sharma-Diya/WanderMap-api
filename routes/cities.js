import * as cityController from "../controllers/city-controller.js";
import * as attractionsController from "../controllers/attractions-controller.js";

import express from "express";
const cityRouter = express.Router();
const attractionsRouter = express.Router();


cityRouter
    .route("/")
    .get(cityController.getAllCities);

cityRouter
    .route("/:id")
    .get(cityController.getCityById);

cityRouter
    .route("/:id/attractions")
    .get(cityController.getAllAttractionsByCities);


export { cityRouter, attractionsRouter};    