var tentativaModel = require("../models/tentativaModel");


function registrarTentativa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.fkUsuarioServer;
    var fkQuiz = req.body.fkQuizServer;
    var notas= req.body.notasServer;
    var pctAcertos= req.body.acertosServer;
    var pctErros= req.body.erradasServer;

    // Faça as validações dos valores
    // Faça as validações dos valores
    // Faça as validações dos valores
    if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else if (fkQuiz == undefined) {
        res.status(400).send("Seu fkQuiz está undefined!");
    } else if (notas == undefined) {
        res.status(400).send("Sua notas está undefined!");
    } else if (pctAcertos == undefined) {
        res.status(400).send("Sua pctAcertos está undefined!");
    }else if (pctErros == undefined) {
        res.status(400).send("Sua pctErros está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        tentativaModel.registrarTentativa(fkUsuario, fkQuiz,notas, pctAcertos,pctErros)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    registrarTentativa
}
