var database = require("../database/config")


function registrarTentativa(idTentativa,fkUsuario, fkQuiz, notas, pctAcertos, pctErros) {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO tentativa (idTentativa,fkUsuario, fkQuiz, notas, pctAcertos,pctErros) VALUES ('${idTentativa}','${fkUsuario}', '${fkQuiz}', '${notas}', '${pctAcertos}', '${pctErros}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTentativa(idUsuario) {
    var instrucaoSql = ` 
 SELECT   
COUNT(*) AS totalTentativas,
MAX(notas) AS melhorNota,
AVG(notas) AS mediaNotas
FROM tentativa  where fkUsuario = ${idUsuario};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarTentativa,
    buscarTentativa
};