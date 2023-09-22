require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
const path = require("path");

const sequelize = require("./db");
const models = require("./models/models");
const mainRouter = require("./routers");

// Middlewares
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "images")));
app.use(fileupload({}));
app.use("/api", mainRouter);

// CRUD opirations
app.get("/", (req, res) => {
  res.status(200).json({ check: "its working" });
});

// Server start config
const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
