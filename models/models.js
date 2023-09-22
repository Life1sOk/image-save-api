const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Images = sequelize.define("images", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING(100), defaultValue: null },
  src: { type: DataTypes.STRING(50), allowNull: false },
});

module.exports = { Images };
