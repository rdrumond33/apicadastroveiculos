const userModel = require('../models/user.model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const path = require('path');

class UserController {
  constructor() {}

  async getUsers(req, res) {
    const data = await userModel.findAll();
    return res.json(data);
  }

  async getLoginTrue(req, res) {
    res.sendFile(
      path.resolve(
        path.relative(__dirname, __dirname + '/src/public/views/user/user.html')
      )
    );
  }

  async getLogin(req, res) {
    if (req.body.login !== '' && req.body.password !== '') {
      try {
        const data = await userModel.findAll({
          where: {
            [Op.and]: [
              { login: req.body.login },
              { password: req.body.password }
            ]
          }
        });
        
        if (data !== []) {
          res.redirect(301, `/userlogin/${data[0].id}`);
        } else {
          res.redirect(req.get('referer'));
        }

      } catch (error) {
        res.redirect(req.get('referer'));
      }
    } else {
      res.redirect(req.get('referer'));
    }
  }
  async getUserId(req, res) {
    const data = await userModel.findAll({
      where: {
        id: req.params.id
      }
    });
    return res.json(data);
  }
}

module.exports = UserController;
