var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de dashboardController.js
router.get("/obterDados/:idUsuario", function (req, res) {
    dashboardController.obterDados(req, res);
})

router.get("/grafico/:idUsuario", function(req, res){
    dashboardController.obterGrafico(req, res);
})
module.exports = router;