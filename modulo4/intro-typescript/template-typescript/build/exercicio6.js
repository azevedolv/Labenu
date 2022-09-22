function operacoes(n1, n2) {
    let maiorNumero;
    let menorNumero;
    if (n1 > n2) {
        maiorNumero = n1;
        menorNumero = n2;
    }
    else {
        maiorNumero = n2;
        menorNumero = n1;
    }
    const soma = n1 + n2;
    console.log("soma", soma);
    const subtracao = maiorNumero - menorNumero;
    console.log("subtração", subtracao);
    const multiplicacao = n1 * n2;
    console.log("multiplicação", multiplicacao);
    console.log("maior", maiorNumero);
}
operacoes(2, 4);
//# sourceMappingURL=exercicio6.js.map