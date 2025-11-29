var dashboardModel = require("../models/dashboardModel");

function obterDados(req, res) {

    var idUsuario = req.params.idUsuario;

    dashboardModel.obterDados(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas dashboards.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function obterGrafico(req, res) {

    var idUsuario = req.params.idUsuario;

    dashboardModel.obterGrafico(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas dashboards.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    obterDados,
    obterGrafico
}