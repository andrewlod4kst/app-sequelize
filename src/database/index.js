const Sequelize = require("sequelize");
const dbConfig = require(".");

const connection = new Sequelize(dbConfig);

module.exports = connection;