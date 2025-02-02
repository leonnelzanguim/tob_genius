const express = require("express");
const connectDB = require("./config/db/db");
const app = express();

// Connexion à MongoDB
connectDB()
  .then((db) => {
    console.log("Connexion établie avec MongoDB. Prêt à traiter les requêtes.");
  })
  .catch((error) => {
    console.error("Erreur de connexion à MongoDB, serveur non démarré.");
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
