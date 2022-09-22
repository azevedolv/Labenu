function inverter(palavra) {
    let palavraInvertida = '';
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }
    return palavraInvertida;
}
console.log(inverter("luiz"));
//# sourceMappingURL=exercicio8.js.map