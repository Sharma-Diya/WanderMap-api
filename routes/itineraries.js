import * as itinerariesController from "../controllers/itineraries-controller.js";

import express from "express";
const itinerariesRouter = express.Router();

itinerariesRouter
    .route("/")
    .get(itinerariesController.getAllItineraries);

itinerariesRouter
    .route("/:id") // Define the route with the ':id' parameter
    .get(itinerariesController.getItineraryById);

itinerariesRouter
    .get("/city/:cityId", itinerariesController.getItinerariesByCityId);
    
itinerariesRouter
    .get("/:cityId/:season", itinerariesController.getItineraryByCityAndSeason);
export default itinerariesRouter;