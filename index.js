/*
        - Query params => meusite.com/users?nome=rodolfo&age=28 //  FILTROS
        - Route params => /users/2          // BUSCAR , DELETAR, OU ATUALIZAR ALGO ESPECIFICO
        - Request Body => meusite.com/users{ "name": "Rodolfo", "age": 28 }
        

        - GET   => buscar informação no back-end
        - POST => criar informação no back-end
        - put /patch => alternar/atualizar informação no back-end
        - delete    => deletar informação no back-end


        - Middleware => interceptador => tem o poder de parar ou alterar dados da requisição


*/
const uuid = require("uuid");
const express = require("express");

const app = express();
app.use(express.json());

const users = [];

const myFirstMiddleware = (request, response, next) => {
  console.log(`fui chamado`);
  next();
  console.log(`Finalizamos`);
};

const checkUserId = (request, response, next) => {
  const { id } = request.params;

  const index = users.findIndex((user) => user.id === id);
  if (index < 0) {
    return response.status(404).json({ error: "User not found" });
  }
  request.userIndex = index;
  request.userId = id
  next()
};

app.get("/users", (request, response) => {
  console.log(`A rota foi chamada`);
  return response.json(users);
});
app.use(myFirstMiddleware);

app.post("/users", (request, response) => {
  const { name, age } = request.body;

  const user = { id: uuid.v4(), name, age };
  users.push(user);
  return response.status(201).json(users);
});

app.put("/users/:id", checkUserId, (request, response) => {
  const { name, age } = request.body;
  const index = request.userIndex;
  const id = request.userId;
  const updatedUser = { id, name, age };

  console.log(index);

  users[index] = updatedUser;

  return response.json(users);
});

app.delete("/users/:id", checkUserId, (request, response) => {
  const index = request.userIndex;

  users.splice(index, 1);

  return response.status(204).json();
});

app.listen(3000, () => {
  console.log(`🚀 server started on port 3000`);
});
