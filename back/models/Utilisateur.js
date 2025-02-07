const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  pseudo: {
    type: String,
    default: ''
  },
  photo: {
    type: String,
    default: ''
  },
  avatar: String,
  enrolledFormations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Formation'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema); 