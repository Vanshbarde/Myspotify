const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Correct in auth.js, song.js, playlist.js

const bcrypt = require('bcrypt');
const { getToken } = require('../utils/helpers');


// Route to register a new user
router.post('/register', async (req, res) => {
  try {
    const { email, password, firstname, lastname, username } = req.body;

    // Check if a user with this email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(403).json({ error: 'A user already exists with this email' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ email, password: hashedPassword, firstname, lastname, username });
    await newUser.save();

    // Create a token to return to the user
    const token = await getToken(newUser.email, newUser);

    // Return the user details along with the token, excluding the password
    const userToReturn = { ...newUser.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to log in an existing user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ error: 'Invalid email (credentials)' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(403).json({ error: 'Invalid password (credentials)' });
    }

    const token = await getToken(user.email, user);
    const userToReturn = { ...user.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
