import bodyParser from "body-parser";
import express, { Express } from "express";
import { findIndex } from "lodash";
import { v4 as uuidv4 } from "uuid";

interface ITodo {
  completed: boolean;
  id: string;
  text: string;
}

const PORT = 8080;

const app: Express = express();
let todos: ITodo[] = [];

app.use(express.static("script"));
app.use(bodyParser.json());

app.get("/api/todos", (req, res) => {
  res.send(todos);
});

app.post("/api/todos", (req, res) => {
  const newTodo = {
    completed: false,
    ...req.body,
    id: uuidv4(),
  };

  todos.push(newTodo);

  res.status(201);
  res.send(newTodo);
});

app.patch("/api/todos/:id", (req, res) => {
  const updateIndex = findIndex(todos, (t: ITodo) => t.id === req.params.id);

  const oldTodo = todos[updateIndex];

  const newTodo = {
    ...oldTodo,
    ...req.body,
  };

  todos[updateIndex] = newTodo;

  res.send(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
  todos = todos.filter((t: ITodo) => t.id !== req.params.id);

  res.status(204);
  res.send();
});

app.listen(PORT);
