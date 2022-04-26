const express = require("express");
const { port } = require("./config");

const app = express();

app.get("/", (req, res) => {
  res.json({ hola: "mundo" });
});

app.listen(port, () => {
  console.log(`Escuchando puerto : ${port}`);
});
