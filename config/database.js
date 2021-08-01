const { Sequelize } = require('sequelize');

module.exports = new Sequelize('pern_blog','user','pass',{
  host: 'postgresql',
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

