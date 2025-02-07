const mongoose = require('mongoose');

const liveSessionSchema = new mongoose.Schema({
  formation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Formation',
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: Date,
  isActive: {
    type: Boolean,
    default: true
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Utilisateur'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('LiveSession', liveSessionSchema); 