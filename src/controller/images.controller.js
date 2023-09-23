const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

const { Images } = require("../models/models");
const { formateDataForFront } = require("../view/image.view");

const getImages = async (req, res) => {
  try {
    const allImages = await Images.findAndCountAll();
    const updatedData = formateDataForFront(allImages);

    return res.json(updatedData);
  } catch (err) {
    return res.status(400).json("Bad request");
  }
};

const addImages = async (req, res) => {
  const { img } = req.files;

  try {
    // Сохраняем картинку в папку images
    let imageName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "images", imageName));

    // Добавляем данные в DB
    const image = await Images.create({ src: imageName });

    return res.json(image);
  } catch (err) {
    return res.status(400).json("Bad request");
  }
};

const addImageTitle = async (req, res) => {
  const { title, id } = req.body;

  try {
    const image = await Images.findAll({ where: { id } });
    await image[0].update({ title });

    return res.json(image);
  } catch (err) {
    return res.status(400).json("Bad request");
  }
};

const deleteImage = async (req, res) => {
  const { id } = req.body;

  try {
    const image = await Images.findAll({ where: { id } });
    const { src } = image[0];

    const imgPath = path.resolve(__dirname, "..", "images", src);

    // Удаление из папки images
    fs.unlink(imgPath, (err) => {
      if (err) {
        console.log(err, "error image");
      } else {
        console.log("deleted");
      }
    });

    // Удаление из DB
    await image[0].destroy();

    return res.json("image deleted");
  } catch (err) {
    return res.status(400).json("Bad request");
  }
};

module.exports = { getImages, addImages, addImageTitle, deleteImage };
