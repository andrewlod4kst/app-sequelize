module.exports = app => {
  const keys = require("../controllers/controller_key.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", keys.create);

  router.get("/:id", keys.findByID);

  // Retrieve all Tutorials
  router.get("/", keys.findAll);

  // Update a Tutorial with id
  router.put("/:id", keys.update);

  // Delete a Tutorial with id
  router.delete("/:id", keys.delete);

  // Delete all Tutorials
  router.delete("/", keys.deleteAll);

  app.use('/api/keys', router);
};