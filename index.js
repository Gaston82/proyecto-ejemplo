const express = require("express");
const { port } = require("./config");

const app = express();
// Middlaware para usar un body en  json
app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  return res.json(users);
});

app.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  return res.json(users);
});

//Revisar filter

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => id !== user.id);
  return res.json(users);
});

app.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;

  users = users.map((user) => (user.id === id ? body : user));

  return res.json(users);
});

app.listen(port, () => {
  console.log(`Escuchando puerto : ${port}`);
});
