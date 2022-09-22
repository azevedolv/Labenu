var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function infoFilme(nome, anoDeLancamento, genero, pontuacao) {
    const condicao = pontuacao ? { nome, anoDeLancamento, genero, pontuacao } : { nome, anoDeLancamento, genero };
    return condicao;
}
console.log(infoFilme("Matrix", "21/05/1999", GENERO.ACAO));
//# sourceMappingURL=exercicio3.js.map