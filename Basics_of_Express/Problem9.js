// Question 9: Static CSS Project

// Create:
// public/css/style.css
// Create EJS page with:
// <h1>My Express Website</h1>
// Apply CSS from static folder.

// Concepts Practiced
// express.static()
// CSS linking

const express = require('express');
const path = require('path');

const app = express();

app.set('view engine' , 'ejs');
app.set('views' , (path.join(__dirname , 'views')));

app.use(express.static(path.join(__dirname , 'public')))

app.get('/' , (req , res) =>{
    res.render('Problem9_view')
})

app.listen(3600, ()=>{
    console.log("server is running on port : http://localhost:3600");
} )