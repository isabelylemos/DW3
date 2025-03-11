import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

// função para listar os jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    // Requisição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ games: games }); // retonra o status e a lista do bd (json)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

//funçaõ para cadastrar jogos
const createGame = async (req, res) => {
  try {
    // capturando valores
    const { title, platform, year, price } = req.body;
    // cadastrando no banco
    await gameService.Create(title, platform, year, price);
    res.sendStatus(201); // codigo 102 (created)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

//funçaõ para deletar jogo;
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      gameService.Delete(id);
      res.sendStatus(204); // codigo (no content)
    } else {
      res.sendStatus(400) // (bad request)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

export default { getAllGames, createGame, deleteGame };
