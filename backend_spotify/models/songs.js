const mongoose = require('mongoose');

// Define the Song schema
const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  album: {
    type: String,
  },
  genre: {
    type: String,
  },
  duration: {
    type: Number, // Duration in seconds
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the Song model
const Song = mongoose.model('Song', songSchema);

module.exports = Song;

