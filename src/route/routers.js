const UserController = require('../controllers/user.controler');
const VeiculoController = require('../controllers/veiculo.controler');

const user = new UserController();
const veiculo = new VeiculoController();

var express = require('express');
var router = express.Router();

//usuario
router.get("/users", user.getUsers)
router.get("/user/:id", user.getUserId)
router.get('/userLogin/:id',user.getLoginTrue)
router.post('/userLogin', user.getLogin)

//Veiculo
router.get("/veiculos", veiculo.getVeiculos)
router.post("/veiculo/adicionarVeiculo", veiculo.getAddVeiculo)
router.post("/veiculo/deletar/:id", veiculo.getDeletarVeiculo)
router.post("/veiculo/update/:id", veiculo.getUpdate)




module.exports = router;
