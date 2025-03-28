import * as attractionsController from "../controllers/attractions-controller.js";

import express from "express";
const attractionsRouter = express.Router();

attractionsRouter
    .route("/")
    .get(attractionsController.getAllAttractions);

attractionsRouter
    .route("/:id")
    .get(attractionsController.getAttractionsById);

export default attractionsRouter;    