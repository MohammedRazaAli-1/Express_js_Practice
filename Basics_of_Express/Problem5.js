// Question 5: Social Media Profile
// Create route: /profile/:username
// Examples: /profile/raza

// Output:Welcome to raza's profile

// /profile/mohit
// Output:Welcome to mohit's profile

// Concepts Practiced
// Dynamic Route
// Template Literals

const express = require('express');

const myapp = express();

myapp.get('/profile/:username' , (req , res) =>{
    res.send(`<h1> welcome to  ${req.params.username}'s Profile `)
} )

myapp.listen('3080' , ()=>{
    console.log("server is running on port : http://localhost:3080/profile")
})