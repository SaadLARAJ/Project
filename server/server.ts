import express from "express";
import { json } from "body-parser";
import { connectDatabase } from "./models/db";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connexion à la base de données
connectDatabase().then(() => {
  // Démarrage du serveur
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
});
