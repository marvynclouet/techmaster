const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const Utilisateur = require('../models/Utilisateur');

// Route pour mettre à jour le profil utilisateur
router.put('/profile', auth, upload.single('photo'), async (req, res) => {
  try {
    const { pseudo } = req.body;
    console.log('Fichier reçu:', req.file); // Pour le débogage
    
    // Trouver et mettre à jour l'utilisateur
    const utilisateur = await Utilisateur.findById(req.user.id);
    
    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    if (pseudo) utilisateur.pseudo = pseudo;
    if (req.file) {
      utilisateur.photo = `/uploads/${req.file.filename}`;
      console.log('Chemin de la photo:', utilisateur.photo); // Pour le débogage
    }

    await utilisateur.save();
    
    console.log('Profil mis à jour pour:', utilisateur.email);
    res.json(utilisateur);
  } catch (err) {
    console.error('Erreur lors de la mise à jour du profil:', err.message);
    res.status(500).json({ message: 'Erreur serveur', error: err.message });
  }
});

// Route pour récupérer le profil utilisateur
router.get('/profile', auth, async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findById(req.user.id).select('-password');
    if (!utilisateur) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.json(utilisateur);
  } catch (err) {
    console.error('Erreur lors de la récupération du profil:', err.message);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router; 