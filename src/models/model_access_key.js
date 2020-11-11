const Aplicacao = require("./model_application")

module.exports = (sequelize, Sequelize) => {
  const ChaveAcesso = sequelize.define("chave_acesso", {
    secret: {
      type: Sequelize.STRING
    }
  });

  ChaveAcesso.belongsTo(Aplicacao(sequelize,Sequelize));

  return ChaveAcesso;
}