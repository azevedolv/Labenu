function inverter(palavra:string):string {
    let palavraInvertida = '';
    for (let i = palavra.length-1; i >= 0; i--) {//parte do último elemento da palavra até o primeiro
        palavraInvertida += palavra[i];
    }
    return palavraInvertida;
}
console.log(inverter("luiz"));
