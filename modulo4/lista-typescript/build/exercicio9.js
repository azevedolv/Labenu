function qtdAnagramas(word) {
    const tamanho = word.length;
    let fatorial = 1;
    for (let i = tamanho; i > 0; i--) {
        fatorial = fatorial * i;
    }
    return fatorial;
}
console.log(qtdAnagramas("tchauzin"));
//# sourceMappingURL=exercicio9.js.map