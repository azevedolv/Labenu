//Exercicio 1
// a) *O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*
//Resposta: round é o custo de desempenho que a função vai demandar; salt é uma string aleatória adicionada ao código a ser encriptado gerando maior complexidade e segurança;
//O valor recomendado é 12 para round, pois é considerado um número que otimiza a relação desempenho e segurança. Foi o custo utilizado

// b) *Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 

// c) *Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*

//Exercício 2
// a) *Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*
// O cadastro, pois as informações cadastradas não passaram pela encriptação (?)
// b) *Faça a alteração do primeiro endpoint*

// c) *Faça a alteração do segundo endpoint*

// d) *No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*
//Resposta: teoricamente, não precisa! Pois a geração do token não interfere em informações criptografadas

//Exercício 3
// a) *Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*

// b) *Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*

// c) *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação. (Não esqueça de adicionar na função query para inserir agora o valor de role do usuário à coluna role no banco)*

// d) *Altere o login para criar o token com o `role` do usuário*
