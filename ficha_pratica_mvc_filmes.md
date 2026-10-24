# 📘 Ficha Prática — API REST com MVC (Node.js + Express + Prisma)

## 🎯 Objetivos

Nesta ficha prática, pretende-se que os estudantes:

- Consolidem os conhecimentos de APIs REST com Node.js e Express  
- Apliquem o padrão **MVC (Model-View-Controller)**  
- Utilizem o **Prisma ORM** com **PostgreSQL**  
- Organizem o código de forma modular e escalável  
- Implementem operações CRUD completas  
- Testem endpoints com o **Postman**  

---

## 🧩 Enquadramento

Na aula teórica, foi desenvolvida uma API simples.  
Nesta aula prática, vais evoluir esse conceito, organizando a aplicação segundo a arquitetura **MVC**, semelhante ao exemplo da biblioteca já estudado.

---

## 🛠️ Tecnologias a utilizar

- Node.js  
- Express  
- Prisma ORM  
- PostgreSQL  
- Postman  

---

## 📁 Estrutura do Projeto

Deves organizar o projeto com a seguinte estrutura:

```
src/
│
├── controllers/
├── routes/
├── services/
├── middlewares/
├── prisma/
│   └── client.js
│
├── app.js
└── server.js
```

---

## 🎬 Tema da Aplicação

Vais desenvolver uma **API de Gestão de Filmes**.

### Entidades:

- **Director**
- **Movie**

---

## 🧱 Modelo de Dados

Deves definir os seguintes modelos no Prisma:

### Director
- id (Int, PK)
- name (String)
- birthYear (Int)

### Movie
- id (Int, PK)
- title (String)
- releaseYear (Int)
- directorId (FK)

📌 Relação:
- Um director pode ter vários filmes  
- Um filme pertence a um director  

---

## ⚙️ Tarefas

### 🔹 1. Setup do Projeto

- Inicializar projeto Node.js  
- Instalar dependências:
  - express  
  - prisma  
  - @prisma/client  
  - dotenv  
- Configurar o Prisma  
- Criar base de dados PostgreSQL  
- Executar migrações  

---

### 🔹 2. Implementar Arquitetura MVC

Organiza o código em:

- **Routes** → definem endpoints  
- **Controllers** → tratam pedidos e respostas  
- **Services** → lógica de negócio  
- **Prisma Client** → acesso à base de dados  

---

### 🔹 3. CRUD de Directors

Implementar:

- GET /directors  
- GET /directors/:id  
- POST /directors  
- PUT /directors/:id  
- DELETE /directors/:id  

📌 Regras:
- Validar campos obrigatórios  
- Retornar 404 se não existir  
- Não permitir apagar director com filmes associados (409)  

---

### 🔹 4. CRUD de Movies

Implementar:

- GET /movies  
- GET /movies/:id  
- POST /movies  
- PUT /movies/:id  
- DELETE /movies/:id  

📌 Regras:
- Validar existência do director  
- Validar campos obrigatórios  

---

### 🔹 5. Relações

Implementar:

- GET /directors/:id/movies  
→ listar filmes de um director  

---

### 🔹 6. Query Params

Implementar:

- Paginação:
  - GET /movies?page=1&limit=5  

- Pesquisa:
  - GET /movies/search?title=...  

- Ordenação:
  - GET /movies?sort=releaseYear  

---

### 🔹 7. Estatísticas

Criar endpoint:

- GET /stats  

Exemplo de resposta:
- total de filmes  
- total de directores  
- média de filmes por director  

---

### 🔹 8. Middleware de Erros

Criar um middleware global para:

- tratar erros  
- devolver mensagens consistentes  
- usar códigos HTTP corretos  

---

### 🔹 9. Testes

- Testar todos os endpoints no Postman  
- Garantir respostas corretas  
- Validar erros  

---

## ⭐ Extra (Opcional)

- Criar seed de dados  
- Deploy da API (ex: Vercel ou Render)  
- Validação mais avançada  

---

## 📌 Critérios de Avaliação

- Estrutura MVC correta  
- Código organizado e legível  
- Funcionamento dos endpoints  
- Uso correto do Prisma  
- Tratamento de erros  
- Qualidade dos testes  

---

## 💡 Notas Finais

- Evita colocar toda a lógica num único ficheiro  
- Segue o exemplo da API da biblioteca  
- Testa frequentemente durante o desenvolvimento  
