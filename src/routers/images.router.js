const express = require("express");

const imagesController = require("../controller/images.controller");

// Images Router
const imagesRouter = express.Router();

imagesRouter.get("/", imagesController.getImages);
imagesRouter.post("/add", imagesController.addImages);
imagesRouter.post("/add-title", imagesController.addImageTitle);
imagesRouter.delete("/delete", imagesController.deleteImage);

module.exports = imagesRouter;
