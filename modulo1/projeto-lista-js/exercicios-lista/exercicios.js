// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2
// }

// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    // implemente sua lógica aqui
    const altura = +prompt("Qual a altura do retângulo?");
    const largura = +prompt("Qual a largura do retângulo?");
    console.log(altura * largura);
    };
  // EXERCÍCIO 02
  function imprimeIdade() {
    // implemente sua lógica aqui
    let anoAtual = Number(prompt("Em que ano estamos?"));
    let anoNascimento = Number(prompt("Em que ano você nasceu?"));
    console.log(anoAtual - anoNascimento);
  }
  imprimeIdade()
  // EXERCÍCIO 03
  function calculaIMC(peso, altura) {
    // implemente sua lógica aqui
    return  peso / (altura * altura);
  }
  // EXERCÍCIO 04
  function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    const nome = prompt("Digite seu nome:");
    const idade = Number(prompt("Digite sua idade:"));
    const email = prompt ("Digite seu e-mail:");
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
    }
  // EXERCÍCIO 05
  function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui
    const cor1 = prompt("Digite sua cor favorita:");
    const cor2 = prompt("Digite sua segunda cor favorita:");
    const cor3 = prompt("Digite sua terceira cor favorita:");
    const array = [cor1, cor2, cor3];
    console.log(array);
  }
  // EXERCÍCIO 06
  function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui
    return string.toUpperCase();
  }
  // EXERCÍCIO 07
  function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui
    return custo / valorIngresso;
  }
  // EXERCÍCIO 08
  function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui
    return string1.length === string2.length;
  }
  // EXERCÍCIO 09
  function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
    return array[0];
  }
  // EXERCÍCIO 10
  function retornaUltimoElemento(array) {
    // implemente sua lógica aqui
    return array[array.length -1];
  }
  // EXERCÍCIO 11
  function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
    const troca = array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = troca;
    return array;
  }
  // EXERCÍCIO 12
  function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui
    return string1.toLowerCase() === string2.toLowerCase()
  }
  // EXERCÍCIO 13
  function checaRenovacaoRG() {
    // implemente sua lógica aqui
    let anoAtual1 = Number(prompt("Digite o ano atual:"));
    const anoNascimento1 = Number(prompt("Digite seu ano de nascimento:"));
    const anoId = Number(prompt("Digite o ano de emissão da sua identidade:"));
    let idade1 = anoAtual1 - anoNascimento1
    let idadeId = anoAtual1 - anoId
    const validadeId = idade1 <= 20 && idadeId >= 5
    const validadeId1 = idade1 > 20 && idade1 <= 50 && idadeId >= 10
    const validadeId2 = idade1 > 50 && idadeId >= 15
    const validade = validadeId || validadeId1 || validadeId2;
    console.log(validade);
    }
  // EXERCÍCIO 14
  function checaAnoBissexto(ano) {
    // implemente sua lógica aqui
    const multiplo400 = ano % 400
    const multiplo4 = ano % 4
    const multiplo100 = ano % 100
    const check = multiplo400 == 0
    const check1 =  multiplo4 == 0
    const check2 = check1 && (multiplo100 == 0)
    const check3 = check2 && check
    const resultado = check || check1 && check3
    console.log(resultado);
    }
    // não to pegando a lógica pro exceto - EXCETO OS DE 100 MAS N DE 400
  // EXERCÍCIO 15
  function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui
  } 