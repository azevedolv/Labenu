# Projeto: Case1 - CuboNetworking

### Projeto desenvolvido em julho de 2022, por Luiz Vinícius de Azevedo.

### Documentação da API:

https://documenter.getpostman.com/view/20356729/UzXKXKBV

<br>

### Link da aplicação

https://cubonetworking-case1.surge.sh/

<br>

## Sobre o projeto: 
Desenvolvido como teste para um case de processo seletivo legado, onde há cadastro de usuários com primeiro nome, último nome e fatia de participação. A aplicação renderiza as informações na tela em forma de tabela com os usuários e em forma de gráfico. A aplicação só permite cadastros até que soma de participações chegue a 100%. 

<br>

### CADASTRO
O usuário precisa preencher os campos: first_name, last_name e participation para realizar o cadastro. É necessário o preenchimento de todos os campos para a finalização da função. Aqui, o id é gerado automático diretamente no Banco de Dados através do auto_increment.

<br>

### BUSCAR USUÁRIO
Endpoint para buscar todas as informações do usuário. Para isso, é necessário passar id, first name ou last name via query. Caso não seja passado nenhum parâmetro como query o endpoint buscará todos os usuários.

<br>


### BUSCAR FIRST NAME
Endpoint para buscar apenas o primeiro nome do usuário. Demanda a ID do usuário via params.

<br>


### BUSCAR LAST NAME
Endpoint para buscar apenas o último nome do usuário. Demanda a ID do usuário via params.

<br>


### DELETAR USUÁRIOS
Endpoint para deletar todos os usuários do banco de dados.

<br>


## Tecnologias utilizadas:
- Node.js
- Typescript
- MYSQL
- Programação Orientada à Objetos
- Postman
- Git
<br>
<br>

## Linguagens e libs utilizadas:
- Typescript
- mysql
- dotenv
- express
- knex

<br>
<br>

### Conhecimentos adquiridos durante o desenvolvimento do projeto:
- Integração com banco de dados externo.
- Requisições API Rest.

<br>
<br>

### Como rodar a aplicação:
- Clone o projeto no terminal utilizando o git clone;
- Na pasta do projeto, instale as dependências com o comando npm install;
- Crie um arquivo .env com as configurações do seu banco de dados(preferencialmente MySQL, que foi o banco de dados utilizado no projeto);
- No arquivo .env, deverá ficar dessa forma:

```
DB_HOST = seu_endereço_host
DB_USER = seu_usuário
DB_PASSWORD = sua_senha
DB_SCHEMA = seu_banco_de_dados
JWT_KEY = chave_jwt
ACCESS_TOKEN_EXPIRES_IN = "tempo_de_expiração_do_token"
BCRYPT_COST = custo_da_aplicação
```
- Por fim, execute a aplicação rodando o comando npm start, ou npm run start para deixar o projeto rodando o tempo todo.
OBSERVAÇÃO: você pode testar os endpoints em um arquivo request.rest ou através de um cliente HTTP (ex: postman), utilizando o endereço https://case1-cubonetworking.herokuapp.com/ como URL padrão para as requisições. Para obter informações de cada endpoint, consulte a documentação.
<br>

## EXTRA

Tabelas criadas no MySQL Workbench para o desenvolvimento do projeto:

- Tabela de usuário

```
CREATE TABLE case1 (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  participation float not null 
)

```
