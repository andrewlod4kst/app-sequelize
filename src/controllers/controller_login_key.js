const db = require("../models");
const Key = db.keys;
const Application = db.applications;
const User = db.users;
const Op = db.Sequelize.Op;

exports.validate = (req,res) => {
  // Validate request
  if (!req.body.secret) {
    res.status(400).send({
      message: "Empty secret!"
    });
    return;
  }

  //db.sequelize.query(`select distinct * from chave_acessos as c inner join aplicacaos as a on c.aplicacaoId = a.id inner join usuarios as u on u.id = a.usuarioId where c.secret = '${req.body.secret}'`)
  Key.findOne({where:{id: req.body.id, secret: req.body.secret}, include: {model: Application, include: {model:User, where:{login: req.body.login, senha: req.body.senha}}}})
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