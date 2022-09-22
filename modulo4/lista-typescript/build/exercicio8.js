let nascimento = process.argv[2];
let emissaoCarteira = process.argv[3];
function verificaValidade(nasc, emissao) {
    const pegaAno = nasc.split("/");
    const anoNumber = Number(pegaAno[2]);
    const idade = 2022 - anoNumber;
    const pegaAnoEmissao = emissao.split("/");
    const emissaoNumber = Number(pegaAnoEmissao[2]);
    const tempoDeCarteira = 2022 - emissaoNumber;
    if (idade <= 20 && tempoDeCarteira >= 5) {
        return true;
    }
    else if (idade < 20 && idade <= 50 && tempoDeCarteira >= 10) {
        return true;
    }
    else if (idade > 50 && tempoDeCarteira >= 15) {
        return true;
    }
    else {
        return false;
    }
}
console.log(verificaValidade(nascimento, emissaoCarteira));
//# sourceMappingURL=exercicio8.js.map