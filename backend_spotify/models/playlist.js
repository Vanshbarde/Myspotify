const mongoose = require('mongoose');

// Define the Playlist schema
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Song'
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the Playlist model
const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
