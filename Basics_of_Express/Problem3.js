// Question 3: Student Profile System

// Create one dynamic route: /student/:name

// Examples:/student/raza

// Output: Welcome Raza

// /student/ali
// Output: Welcome Ali

// Concepts Practiced
// Route Params
// req.params
// Dynamic Routing

const express = require('express');

const server = express()

server.get('/students' , (req , res) =>{   
        res.send(`<h1> welcome to students record management system</h1>`)
    

})

server.get('/students:name' , (req , res) =>{   
        res.send(`<h1>record found ${req.params.name}</h1>`)
    

})

server.listen('3030' , ()=>{
    console.log("server is running on port : http://localhost:3030/students");
})