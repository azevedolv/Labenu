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
function blackjack(){
   const boasVindas = `Boas vindas ao jogo de Blackjack!`;
   console.log(boasVindas);
   if (confirm(`Quer iniciar uma nova rodada?`)){//confirm abre um botao com ok e cancelar
      const carta = comprarCarta();// Sorteia uma carta. Por exemplo, o rei de ouros
      const carta1 = comprarCarta()//carta = usuario; carta1 = computador
   //tudo dentro desse if é se o usuario clicar em OK
      console.log("Usuário:" + " cartas - " + carta.texto +" pontuação - " + carta.valor) // imprime o texto da carta. Nesse caso: "K♦️"// imprime o valor da carta (um número). Nesse caso: 10)
   console.log("Computador:" + " cartas - " + carta1.texto +" pontuação - " + carta1.valor) 
   if (carta.valor > carta1.valor){
      console.log('O usuário ganhou!')
   } else if (carta.valor < carta1.valor){
      console.log("O computador ganhou!")
   } else if (carta.valor == carta1.valor){
     console.log("Deu empate!")
   }
      return true
   }else{
   //tudo dentro do else é se clicar em cancelar
      console.log(`O jogo acabou!`);
      return false
   }
}
blackjack()