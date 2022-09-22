type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
//b)para transpilar o arquivo basta executar o seguinte comando no terminal:
// tsc && node ./build/exercicio4.j
//c)para que o comando acima dê certo é importante existir o arquivo tsconfig.json, principalmente para definir o diretório root e o diretório output
