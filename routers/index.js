const express = require("express");
const imagesRouter = require("./images.router");

// Main router
const mainRouter = express.Router();

mainRouter.use("/images", imagesRouter);

module.exports = mainRouter;
