const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: String,
  duration: String,
  level: String,
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Formateur',
    required: true
  },
  category: String,
  price: Number,
  isLive: {
    type: Boolean,
    default: false
  },
  scheduledDate: Date,
  viewers: {
    type: Number,
    default: 0
  },
  videoUrl: String, // URL de la vidéo pour les rediffusions
  liveSessions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LiveSession'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Formation', formationSchema); 