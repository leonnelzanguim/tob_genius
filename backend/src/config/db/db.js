// config/db.js

const mongoose = require("mongoose");

// Fonction pour établir la connexion à la base de données MongoDB
const connectDB = async () => {
  try {
    // Remplacer 'mongodb://127.0.0.1:27017/user' par l'URL de ta propre base de données MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/tob_genius");

    console.log("Base de données MongoDB connectée");
  } catch (err) {
    // Si une erreur se produit, on l'affiche et on arrête l'application
    console.error("Erreur de connexion MongoDB:", err);
    process.exit(1); // Arrête l'application si la connexion échoue
  }
};

module.exports = connectDB;
