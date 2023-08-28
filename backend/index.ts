import "reflect-metadata";
import express from "express";
import { createConnection, ConnectionOptions } from "typeorm";
import cors from "cors";

const PORT = 3000;

async function startup() {
  try {
    await createConnection();

    const app = express();

    app.use(express.json());
    app.use(cors());

    app.listen(PORT, () => {
      console.log("App running on port " + PORT);
    });
  } catch (error) {
    console.error("Erro ao criar a conexão com o banco de dados:", error);
  }
}

startup();
