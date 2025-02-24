import express from "express";
const app = express();

// configurando o express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// rota principal
app.get("/", (req, res) => {
  //res.send("API iniciada com sucesso");
  const games =
  [{
    title: "Game 1",
    year: 2020,
    plataform: "PC",
    price: 20,
  },
  {
    title: "Game 2",
    year: 2024,
    plataform: "PlayStation 5",
    price: 200,
  }];
res.json(games);
});
});

// iniciando o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});
