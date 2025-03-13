import * as imagesController from "../controllers/images-controller.js";

import express from "express";
const imagesRouter = express.Router();

imagesRouter
    .route("/")
    .get(imagesController.getAllImages);

imagesRouter
    .route("/:type/:id")
    .get(imagesController.getImagesById);

export default imagesRouter;    