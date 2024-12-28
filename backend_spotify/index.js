require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const songRoutes = require('./routes/song');
const playlistRoutes = require('./routes/playlist');
const mongoURI = `mongodb+srv://vanshbarde805:${process.env.MONGO_PASSWORD}@cluster0.kgohx.mongodb.net/spotifyclone?retryWrites=true&w=majority&appName=Cluster0`;
// MongoDB connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Passport JWT setup
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_jwt_secret_key',
    },
    async (jwt_payload, done) => {
      try {
        const User = require('./models/User');
        const user = await User.findById(jwt_payload.id);
        return done(null, user || false);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

app.use(passport.initialize());

// Routes
app.get('/', (req, res) => res.send('Hello, World!'));
app.use('/auth', authRoutes);
app.use('/song', songRoutes);
app.use('/playlist', playlistRoutes);

// Start server
app.listen(port, () => console.log(`Server is running on port ${port}`));
