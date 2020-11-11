const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.validate = (req,res) => {
  // Validate request
  if (!req.body.login) {
    res.status(400).send({
      message: "Empty login!"
    });
    return;
  }

  //db.sequelize.query(`select distinct * from chave_acessos as c inner join aplicacaos as a on c.aplicacaoId = a.id inner join usuarios as u on u.id = a.usuarioId where c.secret = '${req.body.secret}'`)
  User.findOne({where:{login: req.body.login, senha: req.body.senha}})
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