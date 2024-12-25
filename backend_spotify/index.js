require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    const passport = require("passport");
    const user = require("backend_spotify/models/user.js");

// Correctly construct the MongoDB connection string using the environment variable
const mongoURI = `mongodb+srv://vanshbarde805:${process.env.MONGO_PASSWORD}@cluster0.kgohx.mongodb.net/spotifyclone?retryWrites=true&w=majority&appName=Cluster0`;

// Use the constructed mongoURI directly
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

//setup passport jwt

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
