const express = requir("express");
const router = express.Router();
const User = require("backend_spotify/models/user.js");
const bcrypt = require("bcrypt");
const {getToken} = require("backend_spotify/utils/helpers.js");
// this will  help to register
router.post("/register", async (req,res) =>{
    //this codee will run when the /register is call
    //my req.body will contain email , name , password , username
    const {email , password , firstname , lastname , username } = req.body;

    // now i willl check does the any user with this email is exist  if it is then we thrown an error
    const user = await User.findone({email : email});
    if(user){
        return res.status(403).json({error:"the user already exist with this email"});

    }
    //we want to store the user passord in onother way in database through which no one can acces it so we are using here hashing method
    const hashedPassword = bcrypt.hash(password, 10);

     //if the user is not exist then creating the new user
     const newUserData = {email , password:hashedPassword , firstname , lastname , username };
     const newUser = await User.create(newUserData);


    //we want to create a token to return to the user
    const token = await getToken(email , newUser)


    //now return the result to the user
    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});