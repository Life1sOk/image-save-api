const { Sequelize } = require("sequelize");

const setting = "postgres://localhost:5432/test-store";

module.exports = new Sequelize(setting);
