var database = require("../database/config")

function obterDados(idUsuario) {

    var instrucaoSql = `
        SELECT   
    COUNT(*) AS totalTentativas,
    MAX(notas) AS melhorNota,
    AVG(notas) AS mediaNotas,
    avg(pctErros) as MediaErros,
    avg(pctAcertos) as MediaAcertos
    FROM tentativa where fkUsuario = ${idUsuario} LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterGrafico(idUsuario) {
    var instrucaoSql = `
        SELECT idTentativa, notas
        FROM tentativa
        WHERE fkUsuario = ${idUsuario}
        ORDER BY idTentativa DESC
        LIMIT 10;
    `;

        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}
module.exports = {
    obterDados,
    obterGrafico
};