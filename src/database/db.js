const Sequelize = require('sequelize');
const nameDatabase = 'dbUser';
const user= 'root';
const senha = '';

const sequelize = new Sequelize(nameDatabase,user,senha,{
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  //logging: false,
  define: {
    timestamps: false
  }
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com banco de dados foi estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Verifique se o database foi criado com o nome especificado ', err);
  });

  sequelize.sync();

module.exports = sequelize;
