const express = require('express');
const router = express.Router();
const Formation = require('../models/Formation');
const auth = require('../middleware/auth');

// Obtenir toutes les formations
router.get('/', async (req, res) => {
  try {
    const formations = await Formation.find().populate('instructor', 'name avatar');
    res.json(formations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtenir une formation par ID
router.get('/:id', async (req, res) => {
  try {
    const formation = await Formation.findById(req.params.id).populate('instructor');
    if (!formation) {
      return res.status(404).json({ message: 'Formation non trouvée' });
    }
    res.json(formation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Créer une nouvelle formation (protégé)
router.post('/', auth, async (req, res) => {
  const formation = new Formation({
    ...req.body,
    instructor: req.user.id
  });

  try {
    const newFormation = await formation.save();
    res.status(201).json(newFormation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Mettre à jour une formation (protégé)
router.patch('/:id', auth, async (req, res) => {
  try {
    const formation = await Formation.findById(req.params.id);
    if (!formation) {
      return res.status(404).json({ message: 'Formation non trouvée' });
    }

    if (formation.instructor.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Non autorisé' });
    }

    Object.assign(formation, req.body);
    const updatedFormation = await formation.save();
    res.json(updatedFormation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router; 