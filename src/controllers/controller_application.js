const db = require("../models");
const Application = db.applications;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
  // Validate request
  if (!req.body.description) {
    res.status(400).send({
      message: "Empty description!"
    });
    return;
  }

  // Create a Tutorial
  const application = {
    description: req.body.description,
    usuarioId: req.body.usuarioId
  };

  // Save Tutorial in the database
  Application.create(application)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Application."
      });
    });
};

exports.findByID = (req,res) => {
  const id = req.params.id;

  Application.find({ where: {id : id} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving applications."
      });
    });
};

exports.findAll = (req,res) => {
  Application.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving applications."
      });
    });
};

exports.update = (req,res) => {
  const id = req.params.id;

  Application.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Application was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Application with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Application with id=" + id
      });
    });
};
exports.delete = (req,res) => {
  const id = req.params.id;

  Application.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Application was deleted successfully."
        });
      } else {
        res.send({
          message: `Cannot delete Application with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting Application with id=" + id
      });
    });
};
exports.deleteAll = (req,res) => {
  Application.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Applications were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all applications."
      });
    });
};