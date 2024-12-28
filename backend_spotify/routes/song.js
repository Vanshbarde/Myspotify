const express = require('express');
const passport = require('passport');
const router = express.Router();

const Song = require('../models/Song'); 
const User = require('../models/User');

// Route to create a new song
router.post('/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const { title, thumbnail, track } = req.body;
    if (!title || !thumbnail || !track) {
      return res.status(400).json({ error: 'Insufficient details to create song.' });
    }
    const artist = req.user._id;
    const songDetails = { title, thumbnail, track, artist };
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Route to get songs of the current user
router.get('/get/mysongs', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const currentUser = req.user;
    const songs = await Song.find({ artist: currentUser._id }); // Corrected _Id to _id
    return res.status(200).json({ data: songs });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});



// API to get songs by artist
router.get('/get/artist/:artistId', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const { artistId } = req.params;
    const artist = await User.findById(artistId);
    if (!artist) {
      return res.status(404).json({ error: "Artist does not exist" });
    }
    const songs = await Song.find({ artist: artistId });
    return res.status(200).json({ data: songs });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// API to get songs by song name
router.get('/get/songname:songName', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const { songName } = req.params;
    const songs = await Song.find({ title: songName });
    return res.status(200).json({ data: songs });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
