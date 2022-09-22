function separadorDeString (nome:string, data:string):string{
    const arrayData = data.split("/")
    return `Olá! Me chamo ${nome}, nasci no dia ${arrayData[0]} do mês ${arrayData[1]} do ano de ${arrayData[2]}`
}
console.log(separadorDeString("Luiz", "23/10/1996"))