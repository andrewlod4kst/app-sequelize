module.exports = app => {
  const keys = require("../controllers/controller_login_key.js");

  var router = require("express").Router();

  router.get("/", keys.validate);

  app.use('/api/validate/keys', router);
};