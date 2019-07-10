const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const VeiculoModel = sequelize.define('veiculo', {
    // attributes
    codigoCadastro: {
      type: Sequelize.STRING,
      trim:true,
      unique:true
    },
    nome: {
      type: Sequelize.STRING,
      trim:true
    },
    tipo: {
      type: Sequelize.STRING
    },
    imagem: {
        type: Sequelize.STRING,
        trim:true
      },
    categoria: {
        type: Sequelize.STRING,
        trim:true
      },

  }, {
    // options
  });

module.exports = VeiculoModel;