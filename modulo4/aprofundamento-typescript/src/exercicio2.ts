// a entrada parece ser um array de números e a saída é um objeto com o maior, o menor e a média dos números do array
function obterEstatisticas(numeros:number[]):{} {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number, menor:number, media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([1, 2, 3, 10, 9]));

//b)numeroOrdenados é um array que coloca os números em ordem crescente;
//soma é um number que representa a soma de todos os números do array
//estatisticas é um objeto com tres propriedades number

//c)
type amostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros:number[]) => {maior:number, menor:number, media:number}
}   