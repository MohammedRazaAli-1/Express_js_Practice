// Question 10: Personal Blog Homepage
// Create a complete mini project.

// Requirements:
// Routes:/

// Show:Welcome to My Blog

// /about Show:About Me

// /author/:name

// Show:Articles by NAME

// Example:/author/raza

// Output:Articles by raza

const { name } = require('ejs');
const express = require('express');

const app = express();

app.get('/' , (req , res)=>{
    res.send("welcome to my blog");
})

app.get('/about', (req , res)=>{
    res.send("about me ")
})

app.get('/author:name' , (req , res)=>{
    res.send(`artical by :  ${req.params.name}`)
})

app.listen(2300 , ()=>{
    console.log("server is running on port : http://localhost:2300");
})
