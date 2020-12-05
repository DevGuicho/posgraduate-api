const Sequelize = require('sequelize');
const UserModel = require('../models/User');
const { config } = require('../config');
const connectConfig = require('./config');

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: connectConfig.dialect,
    operatorsAliases: false,

    pool: {
      max: connectConfig.pool.max,
      min: connectConfig.pool.min,
      acquire: connectConfig.pool.acquire,
      idle: connectConfig.pool.idle,
    },
  }
);

const User = UserModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  console.log('Tablas creadas');
});

module.exports = {
  User,
};
