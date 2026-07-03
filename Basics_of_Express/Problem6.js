// Question 6: EJS Welcome Page
// Create: views/home.ejs

// From backend send:{name: "Mohammed"}

// Display: Welcome Mohammed 
// using EJS.

// Concepts Practiced
// EJS setup
// res.render()
// Dynamic data

const express = require('express');
const path = require('path');

const myApp = express();
myApp.set('view engine', 'ejs');
myApp.set('views', path.join(__dirname, 'views'));

myApp.get('/', (req, res) => {
    res.render('home', { name: 'Mohammed' });
});

myApp.listen(4000 , ()=>{
    console.log("server is running on port http://localhost:4000")
})