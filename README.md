# toDoApi-Resilia
## ☕ Sobre mim

[![PERFIL](https://img.shields.io/badge/perfil%20-%23323330.svg?&style=for-the-badge&logo=perfil&logoColor=black&color=FF0080)](https://github.com/GabrielSouzaHub)
[![REPOSITÓRIO](https://img.shields.io/badge/repositório%20-%23323330.svg?&style=for-the-badge&logo=repositório&logoColor=black&color=8000FF)](https://github.com/GabrielSouzaHub/toDoApi-Resilia)

---
### Este é um projeto com a intensão de gerenciar usuários e tarefas com a utilização de CRUD

## 🔧 Como começar
Utilize este comando para clonar o repositório
```shell
git clone https://github.com/GabrielSouzaHub/toDoApi-Resilia.git
```
Instale as dependências do projeto
```shell
npm install
```
Entre na pasta do projeto pelo terminal e execute na pasta src
```
node index.js
```
Ou
```
node ./src/index.js
```
Para executar o projeto

## Rotas para serem utilizadas
## 😊 Usuário:
### GET: '/usuarios'
Busca todos usuários
### GET: '/usuarios/:id'
Busca um usuário específico com o id fornecido
### POST: '/usuarios'
Insere um usuário
### DELETE: '/usuarios/:id'
Deleta um usuário específico com o id fornecido
## 📆 Tarefa:
### GET: '/tarefas'
Busca todas tarefas
### GET: '/tarefas/:id'
Busca uma tarefa específico com o id fornecido
### POST: '/tarefas'
Insere uma tarefa
### DELETE: '/tarefas/:id'
Deleta uma tarefa específico com o id fornecido