# Projeto: Case3 - AMARO - BACKEND

### Projeto desenvolvido em agosto de 2022, por Luiz Vinícius de Azevedo.

### Documentação da API:

https://documenter.getpostman.com/view/20356729/VUjLM7mM

<br>

## Sobre o projeto: 
A API Amaro foi desenvolvida como teste para um case de processo seletivo legado, onde há cadastro de produtos com id name e suas tags, simulando uma pequena parte do sistema de uma loja virtual.

<br>

### End-point para consulta dos produtos
Pode ser consultado por: id, nome ou tags. Caso a consulta seja por uma tag ou nome, deverá listar todos os produtos com aquela respectiva busca.  O usuário pode escolher entre id, name ou tag como parametro de busca, onde os primeiros são via query params e o útimo via body.


<br>

### End-point para inserção de dados
O usuário precisa preencher os campos name - como string - e tags - como um array de strings. É necessário o preenchimento de todos os campos para a finalização da função. Aqui, o id é gerado através da biblioteca uuid.


<br>

### Testes unitários

## Tecnologias utilizadas:
- Node.js
- Typescript
- MYSQL
- JEST 
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
- uuid

<br>
<br>

### Conhecimentos adquiridos durante o desenvolvimento do projeto:
- Integração com banco de dados externo.
- Requisições API Rest.
- Programação Orientada a Objetos(POO)
- Testes unitários

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
OBSERVAÇÃO: você pode testar os endpoints em um arquivo request.rest ou através de um cliente HTTP (ex: postman), utilizando o endereço http://rede-social-cookenu.herokuapp.com/ como URL padrão para as requisições. Para obter informações de cada endpoint, consulte a documentação.
<br>

## EXTRA

Tabelas criadas no MySQL Workbench para o desenvolvimento do projeto:

- Tabela de usuário

```
CREATE TABLE case3_Product (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255)
);
```

```
CREATE TABLE case3_Tags (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) 
);
```
```
CREATE TABLE case3_Products_Tags (
    id_product VARCHAR(255) NOT NULL,
    id_tag VARCHAR(255) NOT NULL,
    FOREIGN KEY(id_product) REFERENCES case3_Product(id),
    FOREIGN KEY(id_tag) REFERENCES case3_Tags(id)
);
```