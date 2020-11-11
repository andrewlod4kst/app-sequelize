const User = require("./model_user")

module.exports = (sequelize, Sequelize) => {
  const Aplicacao = sequelize.define("aplicacao", {
    description: {
      type: Sequelize.STRING
    }
  });

  Aplicacao.belongsTo(User(sequelize, Sequelize));

  return Aplicacao;
}