const express = require('express');
const router = express.Router();
const Formateur = require('../models/Formateur');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// Obtenir tous les formateurs
router.get('/', async (req, res) => {
  try {
    const formateurs = await Formateur.find().select('-password');
    res.json(formateurs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtenir un formateur par ID
router.get('/:id', async (req, res) => {
  try {
    const formateur = await Formateur.findById(req.params.id)
      .select('-password')
      .populate('formations');
    if (!formateur) {
      return res.status(404).json({ message: 'Formateur non trouvé' });
    }
    res.json(formateur);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 