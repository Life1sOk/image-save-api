const { Sequelize } = require("sequelize");

const setting = process.env.POSTGRES_URI;

module.exports = new Sequelize(setting);
