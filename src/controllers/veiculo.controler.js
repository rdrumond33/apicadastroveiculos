const veiculoModel = require('../models/veiculo');
const path = require('path');

class VeiculoController {
  constructor() {}

  async getVeiculos(req, res) {
    const data = await veiculoModel.findAll();
    return res.json(data);
  }

  async getLoginTrue(req, res) {
    res.sendFile(
      path.resolve(
        path.relative(__dirname, __dirname + '/src/public/views/user/user.html')
      )
    );
  }

  async getUpdate(req, res) {
    const veiculo = req.body;
    try {
      const data = await veiculoModel.update(veiculo,{
        where: {
          id:req.params.id
        }
      });
      res.redirect(req.get('referer'));

    } catch (error) {
      res.redirect(req.get('referer'));
    }
  }

  async getAddVeiculo(req, res) {    
    if (req.body.codigoCadastro != '') {
      const veiculoNew = req.body;
      try {
        const data = await veiculoModel.create(veiculoNew);
        res.redirect(req.get('referer'));
      } catch (error) {
        res.redirect(req.get('referer'));
      }
      res.redirect(req.get('referer'));
    } else {
      res.redirect(req.get('referer'));
    }
  }

  async getDeletarVeiculo(req, res) {
    const id = req.params.id;
    try {
      const data = await veiculoModel.destroy({
        where: {
          id: id
        }
      });
      res.redirect(req.get('referer'));
    } catch (error) {}
  }

  async getVeiculoId(req, res) {
    const data = await veiculoModel.findAll({
      where: {
        id: req.params.id
      }
    });
    return res.json(data);
  }
}

module.exports = VeiculoController;
