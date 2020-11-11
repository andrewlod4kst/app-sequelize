module.exports = app => {
  const applications = require("../controllers/controller_application.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", applications.create);

  router.get("/:id", applications.findByID);

  // Retrieve all Tutorials
  router.get("/", applications.findAll);

  // Update a Tutorial with id
  router.put("/:id", applications.update);

  // Delete a Tutorial with id
  router.delete("/:id", applications.delete);

  // Delete all Tutorials
  router.delete("/", applications.deleteAll);

  app.use('/api/applications', router);
};