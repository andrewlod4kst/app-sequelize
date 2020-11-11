module.exports = {
  HOSt: '127.0.0.1',
  USER: 'admin',
  PASSWORD: 'root',
  DB: 'testdb',
  dialect: 'mysql',
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

};