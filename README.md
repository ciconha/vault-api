# 🚀 API Backend - Projeto Node.js com MongoDB

Bem-vindo ao meu projeto de backend! Aqui você encontra uma API completa com autenticação, persistência de dados, e estrutura pronta pra crescer — seja pra um e-commerce, dashboard ou qualquer sistema web. Feito com carinho e código limpo. 😄

---

## 📦 Tecnologias usadas

- Node.js
- Express
- MongoDB + Mongoose
- dotenv
- bcryptjs
- jsonwebtoken

---

## 📁 Estrutura do projeto

```plaintext
project-root/
├── .env
├── server.js
├── public/
│   └── index.html
└── src/
    ├── config/
    │   └── db.js
    ├── models/
    │   └── User.js
    ├── routes/
    │   └── auth.js
    └── api/
        └── registros.js
```
---

### ⚙️ Como rodar o projeto ###

```
git clone https://github.com/seu-usuario/seu-repo.git
```

### instale as dependências ###

```
npm install
```
### inicia o servidor ###

```
npm start
```
---

``` 
 Rotas da API
Rota	Método	Descrição
/api/auth/register	POST	Cadastro de usuário
/api/auth/login	POST	Login e geração de token JWT
/api/auth/dashboard	GET	Dados do usuário logado (protegida)
/api	GET	Lista todos os usuários (JSON)
```

```
 Como funciona

    Os dados são salvos no MongoDB local, então mesmo que o servidor desligue, os registros continuam lá.

    A autenticação usa JWT, então você pode proteger rotas facilmente.

    A estrutura está pronta pra crescer: é só adicionar novos modelos e rotas.

``` 
