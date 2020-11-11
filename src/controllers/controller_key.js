const db = require("../models");
const Key = db.keys;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
  // Validate request
  if (!req.body.secret) {
    res.status(400).send({
      message: "Empty secret!"
    });
    return;
  }

  const key = {
    secret: req.body.secret,
    aplicacaoId: req.body.aplicacaoId
  };

  Key.create(key)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Key."
      });
    });
};

exports.findByID = (req,res) => {
  const id = req.params.id;

  Key.find({ where: {id : id} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving keys."
      });
    });
};
exports.findAll = (req,res) => {
  Key.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving access keys."
      });
    });
};

exports.update = (req,res) => {
  const id = req.params.id;

  Key.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Key was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Key with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Key with id=" + id
      });
    });
};
exports.delete = (req,res) => {
  const id = req.params.id;

  Key.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Key was deleted successfully."
        });
      } else {
        res.send({
          message: `Cannot delete Key with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error deleting Key with id=" + id
      });
    });
};
exports.deleteAll = (req,res) => {
  Key.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Keys were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all keys."
      });
    });
};