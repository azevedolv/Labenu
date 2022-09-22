function qtdAnagramas (word:string):number{
    const tamanho = word.length
    let fatorial:number = 1
    for (let i:number = tamanho; i > 0; i--){
        fatorial = fatorial * i
    }
    return fatorial
}
console.log(qtdAnagramas("tchauzin"));
