import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  console.log("ALOU");

  response.send("tudo de boa na lagoa");
});

app.post("/courses", (request, response) => {
  const { name } = request.body;

  return response.json({ name });
});

app.listen(3333, () => {
  console.log("Server is running!");
});
