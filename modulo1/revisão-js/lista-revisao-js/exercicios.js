// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function(a,b) {
      return a - b;
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((item) =>{
      return item % 2 === 0
  })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((item) =>{
        return item % 2 === 0
    }).map((item) =>{
        return item * item
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0
    for (let num of array) {
        if (maiorNumero < num) {
            maiorNumero = num
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maior = 0
  let menor = 0
  if (num1 > num2) {
    maior = num1;
    menor = num2
  } 
  else if (num2 > num1) {
    maior = num2;
    menor = num1
  } else {
    maior = num1
    menor = num2
  }
  const objeto = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: maior % menor === 0,
    diferenca: maior - menor
  }
  return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let array = [] 
  for (let i = 0; array.length < n; i++) {
    if (i % 2 === 0) {
      array.push(i)
    }
  }
  return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC) {
    return "Equilátero"
  } else if (ladoA === ladoB && ladoA !== ladoC || ladoB === ladoC && ladoB !== ladoA || ladoC === ladoA && ladoC !== ladoB) {
    return "Isósceles"
  } else {
    return "Escaleno"
  }
  }

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let novoArray = [];
  let arrayEmOrdem = array.sort(function(a,b) {
    return a - b
  })
novoArray.push(arrayEmOrdem[arrayEmOrdem.length-2], arrayEmOrdem[1]);
return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novoObjeto = {...pessoa, nome:"ANÔNIMO"}
   return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter((item) => {
    return item.altura > 1.5 && item.idade > 14 && item.idade < 60
   })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter((item) => {
    return (item.altura <= 1.5 || item.idade <= 14 || item.idade >= 60)
   })
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
contas[0].saldoTotal = 500;
contas[1].saldoTotal = 6260;
contas[2].saldoTotal = -3340;
contas[3].saldoTotal = -1900;
contas[4].saldoTotal = 1300;
contas[5].saldoTotal = 1400;

contas[0].compras = [];
contas[1].compras = [];
contas[2].compras = [];
contas[3].compras = [];
contas[4].compras = [];
contas[5].compras = [];
return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
 return consultas.sort(function (a, b) {
  if (a.nome < b.nome){
    return -1
  } else {
    return true;
  } 
 })
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  function comparar (a,b) {
    return a.dataDaConsulta < b.dataDaConsulta
   }
   return consultas.sort(comparar);
}