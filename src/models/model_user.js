module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define("usuario", {
    login: {
      type: Sequelize.STRING
    },

    senha: {
      type: Sequelize.STRING
    }
  });

  return Usuario;
}