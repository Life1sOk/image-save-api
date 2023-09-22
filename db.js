const { Sequelize } = require("sequelize");

const setting = `postgres://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

module.exports = new Sequelize(setting);
