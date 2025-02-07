const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('../back/config/db');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connexion à la base de données
connectDB().catch(err => {
  console.error("Erreur lors de la connexion à la base de données:", err);
  process.exit(1);
});

// Routes
const formationsRoutes = require('./routes/formations');
const formateursRoutes = require('./routes/formateurs');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');

app.use('/api/formations', formationsRoutes);
app.use('/api/formateurs', formateursRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

// Gestion des erreurs globale
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Une erreur est survenue sur le serveur' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

// Gestion de la fermeture propre
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('Connexion MongoDB fermée.');
    process.exit(0);
  } catch (err) {
    console.error('Erreur lors de la fermeture de la connexion:', err);
    process.exit(1);
  }
}); 