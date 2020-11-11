const dbConfig = require("../config/database.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOSt,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: dbConfig.pool
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./model_user.js")(sequelize,Sequelize)
db.applications = require("./model_application.js")(sequelize,Sequelize)
db.keys = require("./model_access_key.js")(sequelize,Sequelize)

module.exports = db;