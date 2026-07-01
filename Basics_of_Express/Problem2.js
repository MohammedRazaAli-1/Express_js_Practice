// Question 2: Website Visitor Logger

// Create an application with:
// /
// /about
// /contact
// Before any route executes:

// Print:

// New Visitor Arrived
// Also print:
// Current URL: /about
// (or whichever route user visits)

// Concepts Practiced
// Middleware
// app.use()
// req.url
// next()

const express = require('express');

const myserver = express();

myserver.use((req , res , next)=>{
    console.log("visiter arrived ...")
    console.log(` on route : ${req.url}`)
    next();
})

myserver.get('/' , (req , res) =>{
    res.send("<h1> Welcome to homepage </h1>");
})

myserver.get('/about' , (req , res) =>{
    res.send("<h1> welcome to about us page </h1>")
})

myserver.get('/contact' , (req , res) =>{
    res.send("<h1> contact us </h1>");
})

myserver.listen('3010' , ()=>{
    console.log('server is running on port : http://localhost:3010');
})
