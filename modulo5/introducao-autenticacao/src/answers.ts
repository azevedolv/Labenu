//Exercício 1
// a) *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*
//RESPOSTA: string oferece uma maior quantidade de caracteres em relação aos números, aumentando a possibilidades de ids diferentes
// b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.*
// ./services/IDGenerator

//Exercício 2
// const userTableName = "User";

// const connection = knex({
//   client: "mysql",
//   connection: {
//     host: process.env.DB_HOST,
//     port: 3306,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_SCHEMA,
//   },
// });

// const createUser = async (id: string, email: string, password: string) => {
//   await connection
//     .insert({
//       id,
//       email,
//       password,
//     })
//     .into(userTableName);
// };
// a) *Explique o código acima com as suas palavras.*
// RESPOSTA: abriu-se uma conexão com o banco de dados a partir da variável connection e em seguida criou-se uma função que insere dados na tabela User a partir dos parametros id, email e password;
// b) *Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*
// CREATE TABLE auth_User (
//     id VARCHAR(255) PRIMARY KEY,
// email VARCHAR(255) UNIQUE NOT NULL,
// password VARCHAR(255) NOT NULL
// );

// c) *Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.*
// ./data/createUserData

//Exercício 3
// a) *O que a linha `as string` faz? Por que precisamos usar ela ali?*
//RESPOSTA: define o tipo na qual a informação enviada vai cehgar. Precisamos definir como string, pois a função sign da biblioteca JWT espera receber 3 parâmetros: o payloado, a key e as options, que representam respectivamente a informação a ser guardada a chave de acesso(como string) e informações adicionais, como o tempo de expiração da key;
// b) *Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.*
// ./services/Authenticator 
// ./types/authentication


// //Exercício 4
// a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*
// ./endpoints/createUser
// b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
// ./endpoints/createUser
// c) *Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*
// ./endpoints/createUser


//Exercício 5
// a) Crie uma função que retorne as informações de um usuário a partir do email
// ./endpoints/getUserByEmail


//Exercicio6
//a) *Crie o endpoint que realize login, com as funções que você implementou anteriormente*
// ./endpoints/loginUser
// b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*


//Exercicio 7

// const expiresIn = "1min";

// const getData = (token: string): AuthenticationData => {
//   const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
//   const result = {
//     id: payload.id,
//   };
//   return result;
// };

// a) *O que a linha `as any` faz? Por que precisamos usá-la ali?*
// define que o valor a ser retornado seja um valor do tipo qualquer, e o payload como é um objeto deve ter um tipo qualquer;
// b) *Crie uma função que realize a mesma funcionalidade da função acima*
// ./data/getData

//Exercicio8
// a) *Comece criando uma função no data que retorne o usuário a partir do id*
// ./data/getUserByIDData

// b) *Crie o endpoint com as especificações passadas*
// ./endpoints/getUserByToken