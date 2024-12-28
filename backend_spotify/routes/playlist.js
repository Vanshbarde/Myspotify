const express = require("express");
const passport = require("passport");
const router = express.Router();
const Playlist = require("../models/Playlist");
const Song = require("../models/Song");
const User = require('../models/User');

// Create a playlist
router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const currentUser = req.user;
    const { name, thumbnail, songs } = req.body;

    if (!name || !thumbnail || !Array.isArray(songs)) {
      return res.status(400).json({ error: "Insufficient data" });
    }

    const playlistData = {
      name,
      thumbnail,
      songs,
      owner: currentUser._id,
      collaborators: [],
    };

    const playlist = await Playlist.create(playlistData);
    return res.status(201).json(playlist); 
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Get playlist by ID
router.get("/get/playlist/:playlistId", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const playlistId = req.params.playlistId;
    const playlist = await Playlist.findById(playlistId); // Simplified query

    if (!playlist) {
      return res.status(404).json({ error: "Invalid playlist ID" });
    }

    return res.status(200).json(playlist);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Get all playlists by a specific artist
router.get("/get/artist/:artistId", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const artistId = req.params.artistId;
    const artist = await User.findById(artistId);

    if (!artist) {
      return res.status(404).json({ error: "Invalid artist ID" });
    }

    const playlists = await Playlist.find({ owner: artistId });
    return res.status(200).json({ data: playlists });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Add a song to a playlist
router.post("/add/song", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const currentUser = req.user;
    const { playlistId, songId } = req.body;

    const playlist = await Playlist.findById(playlistId);
    if (!playlist) {
      return res.status(404).json({ error: "Playlist does not exist" });
    }

    if (
      !playlist.owner.equals(currentUser._id) &&
      !playlist.collaborators.includes(currentUser._id)
    ) {
      return res.status(403).json({ error: "Not allowed" });
    }

    const song = await Song.findById(songId);
    if (!song) {
      return res.status(404).json({ error: "Song does not exist" });
    }

    if (!playlist.songs.includes(songId)) {
      playlist.songs.push(songId);
    }

    await playlist.save();
    return res.status(200).json(playlist);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
 