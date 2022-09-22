function operacoes (n1:number, n2:number):void {
    let maiorNumero:number;
    let menorNumero:number;
  
    if (n1 > n2) {
      maiorNumero = n1;
      menorNumero = n2;
    } else {
      maiorNumero = n2;
      menorNumero = n1;
    }
    // a) A soma desses números
const soma = n1 + n2
console.log("soma", soma);

// b) A subtração desses números
const subtracao = maiorNumero - menorNumero
console.log("subtração", subtracao);
// c) A multiplicação desses números
const multiplicacao = n1 * n2
console.log("multiplicação", multiplicacao);
// d) Qual deles é o maior
console.log("maior", maiorNumero);

}
operacoes(2, 4)