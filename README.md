# API - Online Filmes

Esse projeto foi desenvolvido usando as seguintes tecnologias:

- [NodeJS](https://nodejs.org/pt-br/)
- [ExpressJS](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://typeorm.io/)
- [Vs Code](https://code.visualstudio.com/)

### Requisitos

Para Executar a API você precisará ter:
* [Git](https://git-scm.com)
* [NodeJS](https://www.npmjs.com/)

### Recomendo ter instalado para testes mais avançados na API

* [Insomnia](https://insomnia.rest/)

## Rodando a API em sua maquina

### 1° clonar o repositório
### 2° rode o comando npm i ou yarn
### 3° criar um banco de dados postgresql
### 4° crie um arquivo .env na raiz do projeto
### 5° copie e cole as variáveis a seguir

### TYPEORM_HOST = "HOST DO BANCO"
### TYPEORM_USERNAME = "USERNAME NO BANCO"
### TYPEORM_PASSWORD = "SENHA DO BANCO"
### TYPEORM_DATABASE = "NOME DO BANCO"
### TYPEORM_PORT = "PORTA DO SERVIDOR DO BANCO"
### TYPEORM_CONNECTION = postgres
### TYPEORM_MIGRATIONS = src/database/migrations/*.ts
### TYPEORM_MIGRATIONS_DIR = src/database/migrations
### TYPEORM_ENTITIES = src/entities/*.ts
### TYPEORM_ENTITIES_DIR = src/entities

### 6° preencha o primeiros 5 campos com os dados referente aos do seu DB
### 7° execute o comando npm run typeorm migration:run ou yarn typeorm migration:run
### 8° rode o projeto com o comando npm run dev ou yarn dev
### 9° utilize a função de importar no Insomnia e import o arquivo CRUD_MT.json ele possui todas as todas da API pre configuradas
