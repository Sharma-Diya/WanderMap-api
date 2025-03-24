import * as cityController from "../controllers/city-controller.js";

import express from "express";
const cityRouter = express.Router();


cityRouter
    .route("/")
    .get(cityController.getAllCities);

cityRouter
    .route("/:id")
    .get(cityController.getCityDetails);

export { cityRouter};    