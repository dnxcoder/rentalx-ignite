import express from "express";

const app = express();

app.get("/", (request, response) => {
  console.log("ALOU");

  response.send("tudo de boa na lagoa");
});

app.listen(3333);
