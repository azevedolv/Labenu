function validaCPF(cpf) {
    const arrayCPF = cpf.split("-");
    const splitDV = arrayCPF[1].split("");
    const d1Inserido = Number(splitDV[0]);
    const d2Inserido = Number(splitDV[1]);
    const codigoBase = arrayCPF[0].split(".");
    const splitBase1 = codigoBase[0].split("");
    const splitBase2 = codigoBase[1].split("");
    const splitBase3 = codigoBase[2].split("");
    const digito1vezes10 = Number(splitBase1[0]) * 10;
    const digito2vezes9 = Number(splitBase1[1]) * 9;
    const digito3vezes8 = Number(splitBase1[2]) * 8;
    const digito4vezes7 = Number(splitBase2[0]) * 7;
    const digito5vezes6 = Number(splitBase2[1]) * 6;
    const digito6vezes5 = Number(splitBase2[2]) * 5;
    const digito7vezes4 = Number(splitBase3[0]) * 4;
    const digito8vezes3 = Number(splitBase3[1]) * 3;
    const digito9vezes2 = Number(splitBase3[2]) * 2;
    const soma = digito1vezes10 + digito2vezes9 + digito3vezes8 + digito4vezes7 + digito5vezes6 + digito6vezes5 + digito7vezes4 + digito8vezes3 + digito9vezes2;
    const moduloSoma = soma % 11;
    const digitoVerificador1 = 11 - moduloSoma;
    const d1vezes11 = Number(splitBase1[0]) * 11;
    const d2vezes10 = Number(splitBase1[0]) * 10;
    const d3vezes9 = Number(splitBase1[0]) * 9;
    const d4vezes8 = Number(splitBase1[0]) * 8;
    const d5vezes7 = Number(splitBase1[0]) * 7;
    const d6vezes6 = Number(splitBase1[0]) * 6;
    const d7vezes5 = Number(splitBase1[0]) * 5;
    const d8vezes4 = Number(splitBase1[0]) * 4;
    const d9vezes3 = Number(splitBase1[0]) * 3;
    const DV1vezes2 = Number(splitBase1[0]) * 2;
    const soma2 = d1vezes11 + d2vezes10 + d3vezes9 + d4vezes8 + d5vezes7 + d6vezes6 + d7vezes5 + d8vezes4 + d9vezes3 + DV1vezes2;
    const moduloSoma2 = soma2 % 11;
    const digitoVerificador2 = 11 - moduloSoma2;
    if ((cpf === "111.111.111-11" || cpf === "222.222.222-22" || cpf === "333.333.333-33" || cpf === "444.444.444-44" || cpf === "555.555.555-55" || cpf === "666.666.666-66" || cpf === "777.777.777-77" || cpf === "888.888.888-88" || cpf === "999.999.999-99") && (digitoVerificador1 === d1Inserido) && (digitoVerificador2 === d2Inserido)) {
        return false;
    }
    else if ((cpf === "111.111.111-11" || cpf === "222.222.222-22" || cpf === "333.333.333-33" || cpf === "444.444.444-44" || cpf === "555.555.555-55" || cpf === "666.666.666-66" || cpf === "777.777.777-77" || cpf === "888.888.888-88" || cpf === "999.999.999-99") && (digitoVerificador1 !== d1Inserido) || (digitoVerificador2 !== d2Inserido)) {
        return false;
    }
    else if ((digitoVerificador1 === d1Inserido) && (digitoVerificador2 === d2Inserido)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(validaCPF("888.000.555-88"));
//# sourceMappingURL=exercicio10.js.map