const mongoose = require('mongoose');

const formateurSchema = new mongoose.Schema({
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
  avatar: String,
  specialite: String,
  bio: String,
  formations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Formation'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Formateur', formateurSchema); 