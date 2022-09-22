enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome:string,
    anoDeLancamento:string,
    genero:GENERO,
    pontuacao?:number
}
function infoFilme(nome:string,anoDeLancamento:string,genero:GENERO,pontuacao?:number):Filme{
    const condicao = pontuacao ? {nome,anoDeLancamento,genero,pontuacao} : {nome,anoDeLancamento,genero}
    return condicao
}
console.log(infoFilme("Matrix", "21/05/1999", GENERO.ACAO));
