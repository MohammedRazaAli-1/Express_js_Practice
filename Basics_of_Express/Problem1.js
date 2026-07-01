// Question 1: Personal Portfolio Server

// Create an Express application that has the following routes:

// Routes /  : display:Welcome to Mohammed's Portfolio
// /about  : Should display: I am learning Backend Development using Express.js
// /skills : display at least 5 skills you know.
// Example:
// HTML
// CSS
// JavaScript
// React
// Node.js

// Concepts Practiced
// Express setup
// Server creation
// Multiple routes
// res.send()

const express = require('express');
const myApp = express();

myApp.get('/' , (req , res) =>{
    res.send('<h1> Welcome to Mohammed Raza Portfolio </h1>')
})

myApp.get('/about' , (req , res) =>{
    res.send('<h3> I am learning Backend Development using Express.js </h3>')

})

myApp.get('/skills' , (req , res) =>{
    res.send(`
        <ul>
        <li> Javascript </li>
        <li> react js </li>
        <li> Node js </li>
        <li> Express js </li>
        <li> Mongo DB </li>
        </ul>`)
})

myApp.listen(3005 , ()=>{
    console.log("server is running on port http://localhost:3005");
})