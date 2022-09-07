/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   //  function blackjack(){
   //    const boasVindas = `Boas vindas ao jogo de Blackjack!`;
   //    console.log(boasVindas);
   //    let cartasUsuario = [];
   //    let valoresUsuario = [];
   //    let pontosUsuario = 0;
   //    let cartasComputador = [];
   //    let valoresComputador = [];
   //    let pontosComputador = 0;
     
   //    if (confirm(`Quer iniciar uma nova rodada?`)){//confirm abre um botao com ok e cancelar
   //      let i =0
   //       while (i<=2){
   //       const carta = comprarCarta();// Sorteia uma carta. Por exemplo, o rei de ouros
   //       const carta1 = comprarCarta()//carta = usuario; carta1 = computador 
   //       cartasUsuario.push(carta.texto);
   //       valoresUsuario.push(carta.valor);
   //       cartasComputador.push(carta1.texto);
   //       valoresComputador.push(carta1.valor);
   //       pontosUsuario += valoresUsuario[i];
   //       pontosComputador += valoresComputador[i];
   //       console.log(`Usuário: cartas - ${cartasUsuario} - pontuação - ${pontosUsuario}`) // imprime o texto da carta. Nesse caso: "K♦️"// imprime o valor da carta (um número). Nesse caso: 10)
   //       console.log(`Computador: cartas - ${cartasComputador} - pontuação - ${pontosComputador}`);
   //       if (pontosComputador == 22 || pontosUsuario == 22){
   //          console.log(`Suas duas cartas foram A, sortearemos de novo as cartas`)
   //          cartasUsuario.splice(0,2)
   //          valoresUsuario.splice(0,2)
   //          cartasComputador.splice(0,2)
   //          valoresComputador.splice(0,2)
   //          while (i<=2){
   //          const carta = comprarCarta();// Sorteia uma carta. Por exemplo, o rei de ouros
   //       const carta1 = comprarCarta()//carta = usuario; carta1 = computador 
   //       cartasUsuario.push(carta.texto);
   //       valoresUsuario.push(carta.valor);
   //       cartasComputador.push(carta1.texto);
   //       valoresComputador.push(carta1.valor);
   //       pontosUsuario += valoresUsuario[i];
   //       pontosComputador += valoresComputador[i];}
   //       }else{
   //          return
   //       }
   //      }
   //      confirm(`Suas cartas são ${cartasUsuario[0, 1]}. A carta revelada do computador é ${cartasComputador[2]}." +
   //       "\n"+  // \n faz pular a linha  "Deseja comprar mais uma carta?`)
   //       for (i = 0; pontosComputador < 21 || pontosUsuario < 21; i++){
   //       const carta = comprarCarta();// Sorteia uma carta. Por exemplo, o rei de ouros
   //       const carta1 = comprarCarta()//carta = usuario; carta1 = computador
   //    //tudo dentro desse if é se o usuario clicar em OK
   //       cartasUsuario.push(carta.texto);
   //       valoresUsuario.push(carta.valor);
   //       cartasComputador.push(carta1.texto);
   //       valoresComputador.push(carta1.valor);
   //       somaUsuario += valoresUsuario[i];
   //       somaComputador += valoresComputador[i];
   //    }      
   //       console.log(`Usuário: cartas - ${cartasUsuario} - pontuação - ${pontosUsuario}`) // imprime o texto da carta. Nesse caso: "K♦️"// imprime o valor da carta (um número). Nesse caso: 10)
   //       console.log(`Computador: cartas - ${cartasComputador} - pontuação - ${pontosComputador}`);
   //    if (pontosUsuario > pontosComputador){
   //       console.log('O usuário ganhou!')
   //    } else if (pontosUsuario < pontosComputador){
   //       console.log("O computador ganhou!")
   //    } else if (pontosComputador == pontosComputador){
   //      console.log("Deu empate!")
   //    }
   //       return true
   //    }else{
   //    //tudo dentro do else é se clicar em cancelar
   //       console.log(`O jogo acabou!`);
   //       return false
   //    }
   // }
   // blackjack()
//===============================================NÃO ESTÁ ROLANDO===============================================================================//
//================================================ROLOU!!!!!!!!!!!!!!!==========================================================================//
//[ROTEIRO]
alert(`Boas vindas ao jogo de Blackjack!`)
while(confirm('Quer iniciar uma nova rodada?')){
  
   let cartaUsuario = [];// criei a variável aqui pq dentro do "do" iriam criar uma variavel para cada rodada e valores iam se perder;
  
   do{
     cartaUsuario = [comprarCarta(), comprarCarta()]; //compra carta enquanto a condição de baixo for verdadeira
   }while (cartaUsuario[0].valor === 11 && cartaUsuario[1].valor === 11) // toda essa estrutura é uma só do{corpo do faça}while (condição);
   
   let cartaComputador = [];
  
   do {
      cartaComputador = [comprarCarta(), comprarCarta()];
   }while (cartaComputador[0].valor === 11 && cartaComputador[1].valor === 11);
   // verificando a condição de sortear 2 A; valor de A = 11;
    
    let valoresUsuario = () => cartaUsuario.reduce((acumulador, item) => { //ele adiciona um acumulador (soma de todos os elementos) no primeiro parametro; o primeiro é o acumulador e o segundo é "item";
        acumulador += item.valor
        //o acumulador pode iniciar com algum valor específico;
        return acumulador
    }, 0)// definindo o valor do acumulador
    
    let valoresComputador = () => cartaComputador.reduce((acumulador, item) => {
        acumulador += item.valor
        return acumulador
    }, 0)// let estrutura = () => array.reduce((acumulador,item,idex,array) => {ação; no caso acumulador= variavel-valor}, valor inicial do acumulador)
   //let estrutura = () => fazendo uma função
    let naipeUsuario = () => cartaUsuario.map((item) => item.texto); //estrutura mais limpa (apenas uma linha) pra receber o item e receber item.texto;
    
    let naipeComputador = () => cartaComputador.map((item) => item.texto);// chamando qual carta o jogador comprou; mapeou o array onde as cartas estao sendo inseridas e mostrou o texto de *cada* elemento da array;
    // por se transformar em função ele recalcula os valores dos elementos da array cartaUsuario ou cartaComputador e segue para o próximo comando;
   
    while (valoresUsuario() <= 21 && confirm(`Suas cartas são ${naipeUsuario()}. A carta relevada do Computador é ${naipeComputador()[0]}
    Deseja comprar mais uma carta?`)){// <= 21 vem primeiro para só perguntar se quer comprar mais depois de conferir se o valor é menor que 22;
      cartaUsuario.splice(cartaUsuario.length,0,comprarCarta())// o length ta sendo lido primeiro, então não pode ser -1 pq vai ler o [1] e vamos adicionar no [2];
      //enquanto o usuário clicar OK vai mostrar a frase com as cartas que ele já tem e a pergunta se quer comprar mais;
   }
   
   while ((valoresUsuario() > valoresComputador()) && valoresUsuario() < 22){//o usuario precisa estar ganhando ou empatando e não tiver estourado os 21 pontos para o computador querer comprar mais carta;
      // cartaComputador.splice(cartaUsuario.length,0,comprarCarta())
      cartaComputador.push(comprarCarta());
   }
     
   if ((valoresUsuario() > valoresComputador() && valoresUsuario() <= 21) || valoresComputador() > 21){//aqui eu quero apenas LER
      alert(`Parabéns, usuário, você venceu!
      Pontos do Usuário: ${valoresUsuario()} - Pontos Computador: ${valoresComputador()}
      Cartas do Usuário: ${naipeUsuario()} - Cartas do Computador: ${naipeComputador()}`);
   }
   else if ((valoresComputador() > valoresUsuario() && valoresComputador() <= 21) || valoresUsuario() > 21){
      alert(`Que pena, você perdeu.
      Pontos do Usuário: ${valoresUsuario()} - Pontos Computador: ${valoresComputador()}
      Cartas do Usuário: ${naipeUsuario()} - Cartas do Computador: ${naipeComputador()}`);
   }
   else{
      alert(`Vocês empataram!
      Pontos do Usuário: ${valoresUsuario()} - Pontos Computador: ${valoresComputador()}
      Cartas do Usuário: ${naipeUsuario()} - Cartas do Computador: ${naipeComputador()}`);
   }
     console.log(valoresUsuario(), valoresComputador());
}
alert(`O jogo foi encerrado!`)


