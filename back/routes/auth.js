const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Formateur = require('../models/Formateur');
const Utilisateur = require('../models/Utilisateur');

// Inscription
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log('Tentative d\'inscription pour:', email);

    // Vérifier si l'email existe déjà
    let utilisateur = await Utilisateur.findOne({ email });
    if (utilisateur) {
      console.log('Email déjà utilisé:', email);
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }

    // Créer un nouvel utilisateur
    utilisateur = new Utilisateur({
      name,
      email,
      password
    });

    // Hasher le mot de passe
    const salt = await bcrypt.genSalt(10);
    utilisateur.password = await bcrypt.hash(password, salt);

    // Sauvegarder l'utilisateur
    await utilisateur.save();
    console.log('Nouvel utilisateur créé:', {
      id: utilisateur._id,
      name: utilisateur.name,
      email: utilisateur.email
    });

    // Créer et retourner le token
    const payload = {
      userId: utilisateur.id
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '24h' },
      (err, token) => {
        if (err) throw err;
        console.log('Token généré pour:', email);
        res.json({ token });
      }
    );
  } catch (err) {
    console.error('Erreur lors de l\'inscription:', err.message);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Connexion
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Tentative de connexion pour:', email);

    // Vérifier si l'utilisateur existe
    const utilisateur = await Utilisateur.findOne({ email });
    if (!utilisateur) {
      console.log('Utilisateur non trouvé:', email);
      return res.status(400).json({ message: 'Identifiants invalides' });
    }

    // Vérifier le mot de passe
    const isMatch = await bcrypt.compare(password, utilisateur.password);
    if (!isMatch) {
      console.log('Mot de passe incorrect pour:', email);
      return res.status(400).json({ message: 'Identifiants invalides' });
    }

    // Créer et retourner le token
    const payload = {
      userId: utilisateur.id
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '24h' },
      (err, token) => {
        if (err) throw err;
        console.log('Connexion réussie pour:', email);
        res.json({ token });
      }
    );
  } catch (err) {
    console.error('Erreur lors de la connexion:', err.message);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router; 