module.exports = app => {
  const users = require("../controllers/controller_user.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", users.create);

  router.get('/:id', users.findByID);

  // Retrieve all Tutorials
  router.get("/", users.findAll);

  // Update a Tutorial with id
  router.put("/:id", users.update);

  // Delete a Tutorial with id
  router.delete("/:id", users.delete);

  // Delete all Tutorials
  router.delete("/", users.deleteAll);

  app.use('/api/users', router);
};