const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const UserModel = sequelize.define(
  'user',
  {
    // attributes
    login: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING
    }
  },
  {
    // options
  }
);

/** Cria dois usuarios  */
UserModel.create({
  login: 'root',
  password: '123'
});

UserModel.create({
  login: 'prof',
  password: '456'
});

module.exports = UserModel;
