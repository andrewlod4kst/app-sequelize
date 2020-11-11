module.exports = app => {
  const user = require("../controllers/controller_login_user.js");

  var router = require("express").Router();

  router.get("/", user.validate);

  app.use('/api/validate/users', router);
};